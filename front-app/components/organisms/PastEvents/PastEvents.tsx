import Link from "next/link";
import EventCard from "@/components/molecules/EventCard";
import Button from "@/components/atoms/Button";

interface PastEvent {
  name: string;
  date: string;
  image: string;
  description: string;
  url: string;
}

interface PastEventsProps {
  events: PastEvent[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function PastEvents({ events, dict, lang }: PastEventsProps) {
  if (!events || events.length === 0) {
    return (
      <section className="py-12 px-6" aria-label={dict?.pastEvents?.title ?? "Past events"}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-theme">
            {dict?.pastEvents?.nothing1 ?? "No past events"}
          </p>
          <p className="text-sm text-theme mt-2">
            {dict?.pastEvents?.nothing2 ?? "Past events will appear here."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6" aria-label={dict?.pastEvents?.title ?? "Past events"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-2">
          <span className="text-theme/60">{dict?.pastEvents?.prefix ?? ""}</span>{" "}
          {dict?.pastEvents?.content ?? "Past events"}
        </h2>
        <p className="text-sm text-theme mb-8">
          {dict?.pastEvents?.description ?? ""}
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <EventCard
              key={event.url}
              name={event.name}
              date={event.date}
              image={event.image}
              description={event.description}
              url={event.url}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href={`/${lang}/events/past`}>
            <Button
              text={dict?.pastEvents?.seeMore ?? "See more"}
              variant="underlinePrimary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
