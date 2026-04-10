"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Modal from "@/components/atoms/Modal";
import Button from "@/components/atoms/Button";
import LinkedElement from "@/components/atoms/LinkedElement";

interface ProgramLink {
  lang: string;
  link: string;
}

interface DetailsEvent {
  name: string;
  date: string;
  description: string;
  image: string;
  program?: ProgramLink[];
}

interface LinkedProduction {
  title: string;
  image: string;
}

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: DetailsEvent;
  linkedProductions: LinkedProduction[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function DetailsModal({
  isOpen,
  onClose,
  event,
  linkedProductions,
  dict,
}: DetailsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6">
        {/* Event image */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        {/* Title and date */}
        <div>
          <h2 className="text-lg font-bold text-theme">{event.name}</h2>
          <time className="text-xs text-theme font-medium mt-1 block">
            {event.date}
          </time>
        </div>

        {/* Description */}
        <p className="text-sm text-theme">{event.description}</p>

        {/* Program download links */}
        {event.program && event.program.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-theme">
              {dict?.detailsModal?.program ?? "Program"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {event.program.map((prog) => (
                <a
                  key={prog.lang}
                  href={prog.link}
                  download
                  className="inline-flex items-center gap-2"
                >
                  <Download size={18} aria-hidden="true" />
                  <Button
                    text={`${dict?.detailsModal?.download ?? "Download"} (${prog.lang})`}
                    variant="squarePrimary"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Linked productions */}
        {linkedProductions.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-theme">
              {dict?.detailsModal?.linkedProductions ?? "Linked productions"}
            </h3>
            <div className="flex flex-col gap-2">
              {linkedProductions.map((production) => (
                <LinkedElement
                  key={production.title}
                  title={production.title}
                  image={production.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
