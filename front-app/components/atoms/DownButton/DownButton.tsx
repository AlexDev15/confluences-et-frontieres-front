"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface DownButtonProps {
  text?: string;
  className?: string;
  divToScroll: string;
}

export default function DownButton({ text, className, divToScroll }: DownButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY < 100);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    const target = document.getElementById(divToScroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [divToScroll]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={text ?? "Scroll down"}
      className={[
        "absolute bottom-2.5 left-1/2 -translate-x-1/2",
        "flex flex-row items-center gap-2 text-white",
        "transition-opacity duration-300",
        "hover:animate-bounce",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ChevronDown size={24} aria-hidden="true" />
      {text && <span className="text-sm font-bold">{text}</span>}
      <ChevronDown size={24} aria-hidden="true" />
    </button>
  );
}
