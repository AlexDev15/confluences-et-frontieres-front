"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronUp } from "lucide-react";

interface UpButtonProps {
  className?: string;
}

export default function UpButton({ className }: UpButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-8 right-8 z-40",
        "bg-theme text-on-primary rounded-full p-3 shadow-lg",
        "hover:opacity-80 transition-all duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ChevronUp size={24} aria-hidden="true" />
    </button>
  );
}
