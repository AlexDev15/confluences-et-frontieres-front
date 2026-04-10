import { type ReactNode } from "react";

interface RoundContainerProps {
  children: ReactNode;
  className?: string;
}

export default function RoundContainer({ children, className }: RoundContainerProps) {
  return (
    <div
      className={`relative rounded-lg bg-surface shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden p-[2%] phone:shadow-none phone:rounded-none${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
