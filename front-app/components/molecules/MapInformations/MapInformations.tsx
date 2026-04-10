"use client";

import { useState } from "react";
import PartnersList from "@/components/molecules/PartnersList";

interface MapInformationsProps {
  partners: Array<{ name: string; onClick: () => void }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MapInformations({ partners, dict }: MapInformationsProps) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <aside className="hidden desktop:block w-[350px] bg-surface rounded-lg shadow-md p-4">
      <PartnersList
        partners={partners}
        searchInput={searchInput}
        onSearchChange={setSearchInput}
        notFoundText={dict?.notFound ?? "No partners found"}
        placeholder={dict?.searchPlaceholder ?? "Search a partner..."}
      />
    </aside>
  );
}
