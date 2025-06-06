import type { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => {
  return (
    <span
      className={`poke-badge inline-block px-3 py-1 rounded-full font-semibold text-xs shadow-sm ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
