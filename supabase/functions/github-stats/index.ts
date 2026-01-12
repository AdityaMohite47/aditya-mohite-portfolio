import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GitHubRepo {
  name: string;
  fork: boolean;
  size: number;
  has_readme?: boolean;
}

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  productionProjects: number;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const username = 'AdityaMohite47';
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    };

    // GitHub token is optional but helps with rate limits
    const githubToken = Deno.env.get('GITHUB_TOKEN');
    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`;
    }

    // Fetch all public repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=public`,
      { headers }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos: GitHubRepo[] = await reposResponse.json();
    
    // Count public repos (non-forked)
    const ownRepos = repos.filter(repo => !repo.fork);
    const publicRepos = ownRepos.length;

    // Fetch commits for each non-forked repo (limited to avoid rate limits)
    let totalCommits = 0;
    const reposToCheck = ownRepos.slice(0, 10); // Limit to first 10 repos to avoid rate limits

    for (const repo of reposToCheck) {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
          { headers }
        );
        
        if (commitsResponse.ok) {
          // Get total count from Link header
          const linkHeader = commitsResponse.headers.get('Link');
          if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) {
              totalCommits += parseInt(match[1], 10);
            } else {
              // If no "last" link, there's only 1 page
              const commits = await commitsResponse.json();
              totalCommits += commits.length;
            }
          } else {
            const commits = await commitsResponse.json();
            totalCommits += Array.isArray(commits) ? commits.length : 0;
          }
        }
      } catch (e) {
        console.error(`Error fetching commits for ${repo.name}:`, e);
      }
    }

    // Count production-grade projects (non-forked repos with meaningful size)
    const productionProjects = ownRepos.filter(repo => 
      repo.size > 10 // Has some content
    ).length;

    const stats: GitHubStats = {
      publicRepos,
      totalCommits,
      productionProjects: Math.min(productionProjects, publicRepos)
    };

    return new Response(JSON.stringify(stats), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch GitHub stats' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
})
