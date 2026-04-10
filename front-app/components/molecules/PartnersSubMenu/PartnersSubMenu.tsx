"use client";

import Link from "next/link";
import Button from "@/components/atoms/Button";

interface PartnersSubMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

const countries = [
  {
    key: "france",
    partners: [
      { name: "Bretagne", slug: "bretagne" },
      { name: "Rennes", slug: "rennes" },
      { name: "Bruz", slug: "bruz" },
      { name: "Ploumagoar", slug: "ploumagoar" },
      { name: "Timilin", slug: "timilin" },
      { name: "FFCU", slug: "ffcu" },
    ],
  },
  {
    key: "portugal",
    partners: [
      { name: "Vimioso", slug: "vimioso" },
      { name: "Miranda do Douro", slug: "miranda-do-douro" },
      { name: "Mogadouro", slug: "mogadouro" },
    ],
  },
  {
    key: "italy",
    partners: [
      { name: "Prato", slug: "prato" },
    ],
  },
  {
    key: "romania",
    partners: [
      { name: "Iași", slug: "iasi" },
      { name: "Sibiu", slug: "sibiu" },
    ],
  },
  {
    key: "spain",
    partners: [
      { name: "Ribadavia", slug: "ribadavia" },
    ],
  },
];

const fallbackCountryNames: Record<string, string> = {
  france: "France",
  portugal: "Portugal",
  italy: "Italy",
  romania: "Romania",
  spain: "Spain",
};

export default function PartnersSubMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  lang,
  dict,
}: PartnersSubMenuProps) {
  const countryDict = dict?.header?.country ?? {};
  return (
    <div
      className={`hidden min-[1450px]:block fixed top-[60px] left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label="Partners by country"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 pt-3">
        {/* Arrow triangle */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-theme"
          aria-hidden="true"
        />

        <nav className="border-2 border-theme rounded-2xl shadow-md bg-surface p-5 mt-3">
          <div className="grid grid-cols-5 gap-6">
            {countries.map((country) => (
              <div key={country.key}>
                <h3 className="text-base text-theme font-bold mb-3">
                  {countryDict[country.key] ?? fallbackCountryNames[country.key]}
                </h3>
                <ul className="space-y-2">
                  {country.partners.map((partner) => (
                    <li key={partner.slug}>
                      <Link
                        href={`/${lang}/partners/${partner.slug}`}
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
                      >
                        <Button
                          text={partner.name}
                          variant="underlinePrimary"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
