import { type LucideIcon } from "lucide-react";

interface ActivityElementProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export default function ActivityElement({ title, icon: IconComponent, className }: ActivityElementProps) {
  return (
    <div
      className={`flex flex-row gap-3 items-center p-3 rounded-lg bg-theme-light text-theme font-bold text-sm${className ? ` ${className}` : ""}`}
    >
      <IconComponent size={20} aria-hidden="true" />
      <span>{title}</span>
    </div>
  );
}
