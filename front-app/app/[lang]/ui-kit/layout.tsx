"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { type ReactNode } from "react";

const sections = [
  { key: "overview", label: "Overview", href: "" },
  { key: "atoms", label: "Atoms", href: "/atoms" },
  { key: "molecules", label: "Molecules", href: "/molecules" },
  { key: "organisms", label: "Organisms", href: "/organisms" },
];

export default function UIKitLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;
  const base = `/${lang}/ui-kit`;

  return (
    <div className="flex min-h-screen pt-[60px]">
      <aside className="w-[240px] shrink-0 border-r border-theme/20 bg-surface p-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto hidden tablet:block">
        <h2 className="text-lg font-bold text-theme mb-6">UI Kit</h2>
        <nav>
          <ul className="space-y-2">
            {sections.map((s) => {
              const href = `${base}${s.href}`;
              const isActive = pathname === href;
              return (
                <li key={s.key}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-theme text-on-primary font-bold"
                        : "text-theme hover:bg-theme-light"
                    }`}
                  >
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main id="main-content" className="flex-1 p-8 max-w-5xl">{children}</main>
    </div>
  );
}
