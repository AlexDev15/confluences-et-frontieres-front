"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PartnersMobileElement from "@/components/molecules/PartnersMobileElement";

interface Partner {
  image: string;
  name: string;
  description: string;
  location: string;
}

interface PartnersMobileProps {
  partners: Partner[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function PartnersMobile({
  partners,
  dict,
}: PartnersMobileProps) {
  const section = dict?.partners ?? {};

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  function scrollTo(index: number) {
    emblaApi?.scrollTo(index);
  }

  return (
    <section
      className="desktop:hidden py-8"
      aria-label={section.mobileCarouselLabel ?? "Partners"}
    >
      <h2 className="text-xl font-bold text-theme mb-6 px-4">
        {section.title ?? "Our Partners"}
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="min-w-0 flex-[0_0_100%] px-4"
            >
              <PartnersMobileElement
                image={partner.image}
                name={partner.name}
                description={partner.description}
                location={partner.location}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div
        className="flex justify-center gap-2 mt-4"
        role="tablist"
        aria-label={section.slideIndicators ?? "Slide indicators"}
      >
        {partners.map((partner, index) => (
          <button
            key={partner.name}
            type="button"
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`${section.slide ?? "Slide"} ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={[
              "w-3 h-3 rounded-full transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme",
              index === selectedIndex ? "bg-theme" : "bg-theme/30",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
