"use client";

import { useState } from "react";
import MapInformations from "@/components/molecules/MapInformations";
import MapMobileInformations from "@/components/molecules/MapMobileInformations";

interface Partner {
  name: string;
  lat: number;
  lng: number;
}

interface MapProps {
  partners: Partner[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function Map({ partners, dict }: MapProps) {
  const section = dict?.pages?.home?.map ?? {};
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const partnerItems = partners.map((p) => ({
    name: p.name,
    onClick: () => {},
  }));

  return (
    <section aria-label="Partners map">
      <div className="w-full h-[500px] desktop:h-[600px] relative rounded-lg overflow-hidden">
        <div className="hidden desktop:block absolute top-0 left-0 z-10 h-full">
          <MapInformations partners={partnerItems} dict={section} />
        </div>

        <div
          className="w-full h-full bg-gray-200 flex items-center justify-center"
          role="img"
          aria-label="Map - Google Maps API required"
        >
          <p className="text-base text-on-surface/60 text-center px-4">
            Map - Google Maps API required
          </p>
        </div>

        <MapMobileInformations
          partners={partnerItems}
          dict={section}
          isOpen={isMobileOpen}
          onToggle={() => setIsMobileOpen(!isMobileOpen)}
        />
      </div>
    </section>
  );
}
