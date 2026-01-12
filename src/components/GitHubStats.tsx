import { useGitHubStats } from '@/hooks/useGitHubStats';
import { useEffect, useState } from 'react';

const SkeletonStat = () => (
  <div className="text-center animate-pulse">
    <div className="h-10 w-20 bg-muted rounded-md mx-auto" />
    <div className="h-4 w-24 bg-muted rounded-md mt-2 mx-auto" />
  </div>
);



interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  animate?: boolean;
}

const StatItem = ({ value, label, suffix = '', delay, animate = true }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

useEffect(() => {
  if (!isVisible) return;

  // If animation is disabled, show value instantly
  if (animate === false) {
    setDisplayValue(value);
    return;
  }

  if (value === 0) return;

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
}, [value, isVisible, animate]);

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

 if (loading) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-8 pt-8 border-t border-border">
      <SkeletonStat />
      <SkeletonStat />
      <SkeletonStat />
    </div>
  );
}

if (error || !stats) {
  return null;
}

  return (
    <div className="mt-10 pt-8 border-t border-border">
  <h3 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-6 text-center md:text-left">
    Development Activity
  </h3>

  <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
    {/* Active Since */}
    {stats.activeSince && (
      <StatItem 
        value={stats.activeSince}
        label="Active Since"
        delay={0}
        animate={false}
      />
    )}

    {/* Public Repos */}
    <StatItem 
      value={stats.publicRepos} 
      label="Public Repositories" 
      delay={150}
      animate={true}
    />

    {/* Commits */}
    <StatItem 
      value={stats.totalCommits} 
      label="Total Commits" 
      suffix="+"
      delay={300}
      animate={true}

    />
  </div>
</div>

  );
};

export default GitHubStats;
