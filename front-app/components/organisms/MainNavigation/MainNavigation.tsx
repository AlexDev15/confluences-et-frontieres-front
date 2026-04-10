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

  const nav = dict?.header ?? {};

  return (
    <nav
      className="max-[1450px]:hidden flex flex-1 items-center justify-between ml-4 min-w-0"
      aria-label="Main navigation"
    >
      <ul className="flex grow items-center justify-center list-none gap-12 max-[1610px]:gap-8">
        <li>
          <Link
            href={`/${lang}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
          >
            <Button text={(nav.home ?? "Home").toUpperCase()} variant="underlinePrimary" className="font-bold" />
          </Link>
        </li>

        <li
          onMouseEnter={() => togglePartnersMenu(true)}
          onMouseLeave={() => togglePartnersMenu(false)}
        >
          <Link
            href={`/${lang}/partners`}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
          >
            <Button text={(nav.partners ?? "Partners").toUpperCase()} variant="underlinePrimary" className="font-bold" />
          </Link>
        </li>

        <li>
          <Link
            href={`/${lang}/project`}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
          >
            <Button text={(nav.project ?? "Project").toUpperCase()} variant="underlinePrimary" className="font-bold" />
          </Link>
        </li>

        <li>
          <Link
            href={`/${lang}/events`}
            onClick={() => setTheme("evenements")}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
          >
            <Button text={(nav.events ?? "Events").toUpperCase()} variant="underlinePrimary" className="font-bold" />
          </Link>
        </li>

        <li>
          <Link
            href={`/${lang}/productions`}
            onClick={() => setTheme("productions")}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
          >
            <Button
              text={(nav.productions ?? "Productions").toUpperCase()}
              variant="underlinePrimary"
              className="font-bold"
            />
          </Link>
        </li>
      </ul>

      <TranslationSelector placement="bottom" lang={lang} />
    </nav>
  );
}
