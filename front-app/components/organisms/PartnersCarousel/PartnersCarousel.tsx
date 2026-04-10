"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PartnersElement from "@/components/molecules/PartnersElement";
import CarouselButton from "@/components/atoms/CarouselButton";

interface Partner {
  image: string;
  name: string;
  description: string;
  location: string;
  main?: boolean;
}

interface PartnersCarouselProps {
  partners: Partner[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function PartnersCarousel({
  partners,
  dict,
}: PartnersCarouselProps) {
  const section = dict?.partners ?? {};

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="phone:hidden tablet:hidden py-8"
      aria-label={section.carouselLabel ?? "Partners carousel"}
    >
      <h2 className="text-xl font-bold text-theme mb-6">
        {section.title ?? "Our Partners"}
      </h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="min-w-0 flex-[0_0_33.333%]"
              >
                <PartnersElement
                  image={partner.image}
                  name={partner.name}
                  description={partner.description}
                  location={partner.location}
                  main={partner.main}
                />
              </div>
            ))}
          </div>
        </div>

        <CarouselButton
          direction="prev"
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 left-2"
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 right-2"
        />
      </div>
    </section>
  );
}
