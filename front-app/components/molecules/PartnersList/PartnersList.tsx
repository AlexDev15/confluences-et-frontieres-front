"use client";

import SearchBar from "@/components/molecules/SearchBar";

interface PartnersListProps {
  partners: Array<{ name: string; onClick: () => void }>;
  searchInput: string;
  onSearchChange: (value: string) => void;
  notFoundText: string;
  placeholder: string;
}

export default function PartnersList({
  partners,
  searchInput,
  onSearchChange,
  notFoundText,
  placeholder,
}: PartnersListProps) {
  const filtered = partners.filter((p) =>
    p.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        onChange={onSearchChange}
        placeholder={placeholder}
        searchButton={false}
      />
      <div className="max-h-[400px] overflow-y-auto mt-3" role="list">
        {filtered.length === 0 ? (
          <p className="text-theme text-sm p-3" role="status">
            {notFoundText}
          </p>
        ) : (
          filtered.map((partner) => (
            <button
              key={partner.name}
              type="button"
              onClick={partner.onClick}
              className="w-full text-left p-3 hover:bg-theme-light text-theme border-b border-theme/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
              role="listitem"
            >
              {partner.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
