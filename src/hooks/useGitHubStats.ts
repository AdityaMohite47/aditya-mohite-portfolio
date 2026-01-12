import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  productionProjects: number;
}

export const useGitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('github-stats');
        
        if (error) {
          throw error;
        }

        setStats(data);
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err);
        setError('Failed to load stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
