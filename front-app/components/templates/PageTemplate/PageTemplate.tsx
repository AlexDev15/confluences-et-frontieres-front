import { type ReactNode } from "react";

export default function PageTemplate({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main id="main-content" className={`flex-1 ${className ?? ""}`}>
      {children}
    </main>
  );
}
