import { useGitHubStats } from '@/hooks/useGitHubStats';
import { useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ value, label, suffix = '', delay }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible || value === 0) return;

    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value, isVisible]);

  return (
    <div 
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-foreground">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const GitHubStats = () => {
  const { stats, loading, error } = useGitHubStats();

  // Don't render anything if loading, error, or no stats
  if (loading || error || !stats) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-8 pt-8 border-t border-border">
      <StatItem 
        value={stats.publicRepos} 
        label="Public Repositories" 
        delay={0}
      />
      <StatItem 
        value={stats.totalCommits} 
        label="Total Commits" 
        suffix="+"
        delay={150}
      />
      <StatItem 
        value={stats.productionProjects} 
        label="Production Projects" 
        delay={300}
      />
    </div>
  );
};

export default GitHubStats;
