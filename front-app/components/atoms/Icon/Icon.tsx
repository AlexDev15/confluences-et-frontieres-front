import { type LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  label?: string;
}

export default function Icon({ icon: LucideIconComponent, size = 24, className, label }: IconProps) {
  if (label) {
    return (
      <LucideIconComponent
        size={size}
        className={className}
        role="img"
        aria-label={label}
      />
    );
  }

  return (
    <LucideIconComponent
      size={size}
      className={className}
      aria-hidden="true"
    />
  );
}
