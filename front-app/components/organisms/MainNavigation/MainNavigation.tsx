"use client";

import Link from "next/link";
import Button from "@/components/atoms/Button";
import TranslationSelector from "@/components/molecules/TranslationSelector";
import { useTheme } from "@/contexts/ThemeContext";

interface MainNavigationProps {
  togglePartnersMenu: (value: boolean) => void;
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MainNavigation({
  togglePartnersMenu,
  lang,
  dict,
}: MainNavigationProps) {
  const { setTheme } = useTheme();

  const nav = dict?.nav ?? {};

  return (
    <nav
      className="max-[1450px]:hidden flex grow items-center justify-between ml-4"
      aria-label={nav.mainNavigation ?? "Main navigation"}
    >
      <Link
        href={`/${lang}`}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        <Button text={nav.home ?? "Home"} variant="underlinePrimary" />
      </Link>

      <div
        onMouseEnter={() => togglePartnersMenu(true)}
        onMouseLeave={() => togglePartnersMenu(false)}
      >
        <Link
          href={`/${lang}/partners`}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          <Button text={nav.partners ?? "Partners"} variant="underlinePrimary" />
        </Link>
      </div>

      <Link
        href={`/${lang}/project`}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        <Button text={nav.project ?? "Project"} variant="underlinePrimary" />
      </Link>

      <Link
        href={`/${lang}/events`}
        onClick={() => setTheme("evenements")}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        <Button text={nav.events ?? "Events"} variant="underlinePrimary" />
      </Link>

      <Link
        href={`/${lang}/productions`}
        onClick={() => setTheme("productions")}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        <Button
          text={nav.productions ?? "Productions"}
          variant="underlinePrimary"
        />
      </Link>

      <TranslationSelector placement="bottom" lang={lang} />
    </nav>
  );
}
