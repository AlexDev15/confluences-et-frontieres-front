"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MainNavigation from "@/components/organisms/MainNavigation";
import MobileNavigation from "@/components/organisms/MobileNavigation";
import PartnersSubMenu from "@/components/molecules/PartnersSubMenu";

interface HeaderProps {
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isPartnersMenuOpen, setIsPartnersMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsPartnersMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-[85px] tablet:h-[60px] phone:h-[60px] z-20 bg-surface border-b-[5px] border-theme flex items-center justify-between px-2.5"
      role="banner"
    >
      <Link
        href={`/${lang}`}
        aria-label={dict?.nav?.home ?? "Home"}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
      >
        <Image
          src="/C&F_Logo.gif"
          alt="Confluences et Frontières"
          width={200}
          height={100}
          unoptimized
          className="h-full w-auto max-h-[75px] tablet:max-h-[50px] phone:max-h-[50px] object-contain"
        />
      </Link>

      <MainNavigation
        togglePartnersMenu={setIsPartnersMenuOpen}
        lang={lang}
        dict={dict}
      />

      <MobileNavigation
        isMenuOpen={isMobileMenuOpen}
        setMenuState={setIsMobileMenuOpen}
        lang={lang}
        dict={dict}
      />

      <PartnersSubMenu
        isOpen={isPartnersMenuOpen}
        onMouseEnter={() => setIsPartnersMenuOpen(true)}
        onMouseLeave={() => setIsPartnersMenuOpen(false)}
        lang={lang}
      />
    </header>
  );
}
