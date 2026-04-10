"use client";

import { useState } from "react";
import Image from "next/image";
import MotionDiv from "@/components/atoms/MotionDiv";

interface Partner {
  name: string;
  description: string;
  image: string;
  location: string;
}

interface PartnersDescriptionProps {
  partner: Partner;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function PartnersDescription({ partner, dict }: PartnersDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section aria-label={partner.name}>
      <MotionDiv>
        {/* Hero image */}
        <div className="relative h-[60vh] w-full bg-cover bg-center overflow-hidden">
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-2xl font-bold text-on-primary">{partner.name}</h2>
            <p className="text-sm text-on-primary/80 mt-1">{partner.location}</p>
          </div>
        </div>

        {/* Description with read more */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div
            className={`text-sm text-theme overflow-hidden transition-[max-height] duration-300 ${
              expanded ? "max-h-[2000px]" : "max-h-[150px]"
            }`}
          >
            <p>{partner.description}</p>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-xs font-medium text-theme underline underline-offset-4 hover:text-theme/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
            aria-expanded={expanded}
          >
            {expanded
              ? (dict?.partnersDescription?.readLess ?? "Read less")
              : (dict?.partnersDescription?.readMore ?? "Read more")}
          </button>
        </div>
      </MotionDiv>
    </section>
  );
}
