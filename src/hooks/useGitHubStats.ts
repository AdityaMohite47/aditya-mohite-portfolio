import { useEffect, useState } from 'react';

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  activeSince: number | null;
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          import.meta.env.VITE_GITHUB_STATS_URL
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        setStats(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}