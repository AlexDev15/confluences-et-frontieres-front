"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

export default function CarouselButton({ direction, onClick, className }: CarouselButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const ariaLabel = direction === "prev" ? "Previous slide" : "Next slide";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-theme text-on-primary rounded-full p-2 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme${className ? ` ${className}` : ""}`}
    >
      <Icon size={24} aria-hidden="true" />
    </button>
  );
}
