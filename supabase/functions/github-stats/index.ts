import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GITHUB_API = "https://api.github.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get("GITHUB_TOKEN");
    const username = Deno.env.get("GITHUB_USERNAME");

    if (!token || !username) {
      return new Response(
        JSON.stringify({ error: "Missing GitHub credentials" }),
        { status: 500, headers: corsHeaders }
      );
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    };

    // Fetch repositories
    const reposRes = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100`,
      { headers }
    );

    const repos = await reposRes.json();
    const publicRepos = repos.filter((r: any) => !r.fork);

    let totalCommits = 0;
    let activeSinceYear = new Date().getFullYear();

    for (const repo of publicRepos) {
      // ---- Active Since (earliest repo creation year) ----
      const repoYear = new Date(repo.created_at).getFullYear();
      if (repoYear < activeSinceYear) {
        activeSinceYear = repoYear;
      }

      // ---- Total commits (via contributors summary) ----
      const contribRes = await fetch(
        `${GITHUB_API}/repos/${username}/${repo.name}/contributors`,
        { headers }
      );

      if (contribRes.ok) {
        const contributors = await contribRes.json();
        const me = contributors.find(
          (c: any) => c.login === username
        );
        if (me?.contributions) {
          totalCommits += me.contributions;
        }
      }
    }

    return new Response(
      JSON.stringify({
        publicRepos: publicRepos.length,
        totalCommits,
        activeSince: activeSinceYear,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch GitHub stats" }),
      { status: 500, headers: corsHeaders }
    );
  }
});