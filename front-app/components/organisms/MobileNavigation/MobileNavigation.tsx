"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/atoms/Button";
import TranslationSelector from "@/components/molecules/TranslationSelector";
import { useTheme } from "@/contexts/ThemeContext";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setMenuState: (state: boolean) => void;
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MobileNavigation({
  isMenuOpen,
  setMenuState,
  lang,
  dict,
}: MobileNavigationProps) {
  const { setTheme } = useTheme();

  const nav = dict?.nav ?? {};

  function closeMenu() {
    setMenuState(false);
  }

  return (
    <div className="min-[1450px]:hidden">
      <button
        type="button"
        onClick={() => setMenuState(!isMenuOpen)}
        aria-label={isMenuOpen ? (nav.closeMenu ?? "Close menu") : (nav.openMenu ?? "Open menu")}
        aria-expanded={isMenuOpen}
        className="absolute top-1/2 right-2.5 -translate-y-1/2 text-theme w-[30px] h-[30px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        {isMenuOpen ? (
          <X className="w-[30px] h-[30px]" aria-hidden="true" />
        ) : (
          <Menu className="w-[30px] h-[30px]" aria-hidden="true" />
        )}
      </button>

      <nav
        aria-label={nav.mobileNavigation ?? "Mobile navigation"}
        className={[
          "absolute top-[85px] right-0 min-w-[300px] h-[calc(100dvh-85px)]",
          "tablet:top-[60px] tablet:h-[calc(100dvh-60px)]",
          "phone:top-[60px] phone:h-[calc(100dvh-60px)]",
          "border-l-[5px] border-theme bg-surface",
          "flex flex-col items-center gap-6 p-8",
          "transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-[300px]",
        ].join(" ")}
      >
        <Link
          href={`/${lang}`}
          onClick={closeMenu}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button text={nav.home ?? "Home"} variant="underlinePrimary" />
        </Link>

        <Link
          href={`/${lang}/partners`}
          onClick={closeMenu}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button text={nav.partners ?? "Partners"} variant="underlinePrimary" />
        </Link>

        <Link
          href={`/${lang}/project`}
          onClick={closeMenu}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button text={nav.project ?? "Project"} variant="underlinePrimary" />
        </Link>

        <Link
          href={`/${lang}/events`}
          onClick={() => {
            setTheme("evenements");
            closeMenu();
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button text={nav.events ?? "Events"} variant="underlinePrimary" />
        </Link>

        <Link
          href={`/${lang}/productions`}
          onClick={() => {
            setTheme("productions");
            closeMenu();
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button
            text={nav.productions ?? "Productions"}
            variant="underlinePrimary"
          />
        </Link>

        <div className="mt-auto pb-8">
          <TranslationSelector placement="top" lang={lang} />
        </div>
      </nav>
    </div>
  );
}
