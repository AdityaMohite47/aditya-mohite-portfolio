import { useEffect, useState } from 'react';

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  activeSince: number | null;
}

const GITHUB_USERNAME = 'AdityaMohite47'; // Your GitHub username

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch user data from GitHub API
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=created&direction=asc`
        );
        
        if (!reposResponse.ok) throw new Error('Failed to fetch repos');
        
        const repos = await reposResponse.json();
        
        // Filter out forked repos
        const ownRepos = repos.filter((repo: any) => !repo.fork);
        
        // Calculate active since (year of first repo)
        let activeSinceYear = new Date().getFullYear();
        if (ownRepos.length > 0) {
          const firstRepo = ownRepos[0];
          activeSinceYear = new Date(firstRepo.created_at).getFullYear();
        }
        
        // For total commits, we'll use a conservative estimate
        // GitHub API doesn't provide total commits easily without hitting rate limits
        // We'll estimate based on recent activity or use a placeholder
        // Alternative: You can manually update this value periodically
        const estimatedCommits = ownRepos.reduce((total: number, repo: any) => {
          // Rough estimate: 10-50 commits per repo depending on size
          return total + Math.max(10, Math.min(repo.size / 10, 100));
        }, 0);
        
        setStats({
          publicRepos: userData.public_repos,
          totalCommits: Math.floor(estimatedCommits),
          activeSince: activeSinceYear,
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}