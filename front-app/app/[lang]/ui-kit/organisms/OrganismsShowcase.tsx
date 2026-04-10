"use client";

import { useState } from "react";
import NextEvents from "@/components/organisms/NextEvents";
import PastEvents from "@/components/organisms/PastEvents";
import ProductionPreList from "@/components/organisms/ProductionPreList";
import DetailsModal from "@/components/organisms/DetailsModal";
import Button from "@/components/atoms/Button";

const mockEvents = [
  {
    name: "1ere Biennale de Vimioso",
    date: "2023-10-15",
    image: "/images/events/1er_Biennal_Interculturel_Vimioso.jpg",
    description: "Premiere biennale interculturelle organisee a Vimioso.",
    url: "#",
  },
  {
    name: "Fresques murales a Bruz",
    date: "2024-06-01",
    image: "/images/events/FresqueMuralBruz.jpeg",
    description: "L'artiste Allan Halley peint des fresques a Bruz.",
    url: "#",
  },
  {
    name: "Congres International",
    date: "2024-09-28",
    image: "/images/events/1er_Congrès_international_interculturel_et_plurilingue.jpg",
    description: "Congres international interculturel et plurilingue.",
    url: "#",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OrganismsShowcase({ dict, lang }: { dict: Record<string, any>; lang: string }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      {/* NextEvents */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">NextEvents</h2>
        <NextEvents events={mockEvents} dict={dict} lang={lang} />
      </section>

      {/* PastEvents */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">PastEvents</h2>
        <PastEvents events={mockEvents.slice(0, 2)} dict={dict} lang={lang} />
      </section>

      {/* ProductionPreList */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">ProductionPreList</h2>
        <ProductionPreList productions={mockEvents.slice(0, 1)} dict={dict} lang={lang} />
      </section>

      {/* DetailsModal */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">DetailsModal</h2>
        <Button text="Open Details Modal" variant="squarePrimary" onClick={() => setDetailsOpen(true)} />
        <DetailsModal
          isOpen={detailsOpen}
          onClose={() => setDetailsOpen(false)}
          event={{
            name: "1ere Biennale de Vimioso",
            date: "2023-10-15",
            description: "Premiere biennale interculturelle, transfrontaliere et europeenne de Vimioso.",
            image: "/images/events/1er_Biennal_Interculturel_Vimioso.jpg",
          }}
          linkedProductions={[
            { title: "Fresques murales", image: "/images/productions/GrandeMuraille.jpg" },
          ]}
          dict={dict}
        />
      </section>

      {/* Note about Header/Footer */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">Header & Footer</h2>
        <p className="text-sm text-on-surface/60">
          The Header and Footer are visible on this page as they are part of the LocaleLayout.
          Scroll to the top to see the Header and to the bottom for the Footer.
        </p>
      </section>

      {/* Note about Calendar/Map */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">Calendar & Map</h2>
        <p className="text-sm text-on-surface/60">
          Calendar requires FullCalendar integration and Map requires a Google Maps API key.
          These will be visible when integrated in actual pages with real data.
        </p>
      </section>
    </>
  );
}
