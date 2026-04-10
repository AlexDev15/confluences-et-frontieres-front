"use client";

import { useState } from "react";
import PartnersList from "@/components/molecules/PartnersList";

interface MapMobileInformationsProps {
  partners: Array<{ name: string; onClick: () => void }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MapMobileInformations({
  partners,
  dict,
  isOpen,
  onToggle,
}: MapMobileInformationsProps) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div
      className={`desktop:hidden fixed bottom-0 left-0 w-full bg-surface rounded-t-2xl shadow-xl z-40 transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-[calc(100%-48px)]"
      }`}
      role="region"
      aria-label={dict?.partnersPanel ?? "Partners panel"}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-center py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        aria-label={isOpen ? "Close partners panel" : "Open partners panel"}
        aria-expanded={isOpen}
      >
        <span className="w-10 h-1.5 bg-theme/30 rounded-full" aria-hidden="true" />
      </button>

      <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
        <PartnersList
          partners={partners}
          searchInput={searchInput}
          onSearchChange={setSearchInput}
          notFoundText={dict?.notFound ?? "No partners found"}
          placeholder={dict?.searchPlaceholder ?? "Search a partner..."}
        />
      </div>
    </div>
  );
}
