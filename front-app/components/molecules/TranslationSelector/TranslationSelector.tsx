"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface TranslationSelectorProps {
  placement?: "top" | "bottom";
  lang: string;
}

const languages = [
  { code: "fr", name: "Français", flag: "/images/flags/fr.svg" },
  { code: "en", name: "English", flag: "/images/flags/gb.svg" },
  { code: "pt", name: "Português", flag: "/images/flags/pt.svg" },
  { code: "it", name: "Italiano", flag: "/images/flags/it.svg" },
  { code: "gl", name: "Galego", flag: "/images/flags/gl.svg" },
];

export default function TranslationSelector({
  placement = "bottom",
  lang,
}: TranslationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(code: string) {
    setIsOpen(false);
    const segments = pathname.split("/");
    segments[1] = code;
    const newPath = segments.join("/");
    router.push(newPath);
  }

  const dropdownPosition = placement === "top" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 border-2 border-theme rounded-lg bg-surface text-theme focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language: ${currentLang.name}`}
      >
        <Image
          src={currentLang.flag}
          alt=""
          width={25}
          height={25}
          className="rounded-sm"
        />
        <span className="text-xs">{currentLang.name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Select language"
          className={`absolute ${dropdownPosition} left-0 z-50 min-w-full border-2 border-theme bg-surface rounded-lg overflow-hidden shadow-md`}
        >
          {languages.map((language) => (
            <li key={language.code} role="option" aria-selected={language.code === lang}>
              <button
                type="button"
                onClick={() => handleSelect(language.code)}
                className="flex items-center gap-2 w-full px-3 py-2 text-theme hover:bg-theme hover:text-on-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
              >
                <Image
                  src={language.flag}
                  alt=""
                  width={25}
                  height={25}
                  className="rounded-sm"
                />
                <span className="text-xs">{language.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
