"use client";

import Link from "next/link";

interface MobileListProps {
  events: Array<{ name: string; date: string; url: string }>;
  noEventsText: string;
}

export default function MobileList({ events, noEventsText }: MobileListProps) {
  if (events.length === 0) {
    return (
      <div className="desktop:hidden block" role="status">
        <p className="text-theme text-sm p-3">{noEventsText}</p>
      </div>
    );
  }

  return (
    <nav className="desktop:hidden block" aria-label="Events list">
      <ul>
        {events.map((event) => (
          <li key={event.url}>
            <Link
              href={event.url}
              className="flex justify-between items-center p-3 border-b border-theme/20 hover:bg-theme-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
            >
              <time className="text-xs text-theme">{event.date}</time>
              <span className="text-sm text-theme">{event.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
