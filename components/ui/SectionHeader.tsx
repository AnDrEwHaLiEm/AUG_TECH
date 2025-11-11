import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
