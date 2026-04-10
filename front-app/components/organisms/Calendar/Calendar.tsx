"use client";

import { useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Link from "next/link";
import RoundContainer from "@/components/molecules/RoundContainer";

interface CalendarEvent {
  title: string;
  date: string;
  url: string;
}

interface CalendarProps {
  events: CalendarEvent[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function Calendar({ events, dict, lang }: CalendarProps) {
  const fcEvents = useMemo(
    () => events.map((e) => ({ title: e.title, date: e.date, url: e.url })),
    [events],
  );

  return (
    <section aria-label={dict?.calendar?.title ?? "Calendar"}>
      {/* Desktop / Tablet calendar */}
      <div className="hidden tablet:block">
        <RoundContainer>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={lang}
            events={fcEvents}
            eventClick={(info) => {
              info.jsEvent.preventDefault();
              if (info.event.url) {
                window.open(info.event.url, "_self");
              }
            }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            height="auto"
          />
        </RoundContainer>
      </div>

      {/* Mobile list */}
      <div className="block tablet:hidden">
        <RoundContainer>
          <h2 className="text-lg font-bold text-theme mb-4">
            {dict?.calendar?.title ?? "Calendar"}
          </h2>
          <ul className="flex flex-col gap-3" role="list">
            {events.map((event) => (
              <li key={`${event.title}-${event.date}`}>
                <Link
                  href={event.url}
                  className="flex flex-col gap-1 p-3 rounded-lg border border-theme hover:bg-theme-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
                >
                  <time className="text-xs text-theme font-medium">
                    {event.date}
                  </time>
                  <span className="text-sm font-bold text-theme">
                    {event.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </RoundContainer>
      </div>
    </section>
  );
}
