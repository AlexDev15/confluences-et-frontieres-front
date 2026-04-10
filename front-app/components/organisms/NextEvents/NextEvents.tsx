import Link from "next/link";
import EventCard from "@/components/molecules/EventCard";
import Button from "@/components/atoms/Button";

interface NextEvent {
  name: string;
  date: string;
  image: string;
  description: string;
  url: string;
}

interface NextEventsProps {
  events: NextEvent[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function NextEvents({ events, dict, lang }: NextEventsProps) {
  if (!events || events.length === 0) {
    return (
      <section className="py-12 px-6" aria-label={dict?.nextEvents?.title ?? "Next events"}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-theme">
            {dict?.nextEvents?.nothing1 ?? "No upcoming events"}
          </p>
          <p className="text-sm text-theme mt-2">
            {dict?.nextEvents?.nothing2 ?? "Check back later for new events."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6" aria-label={dict?.nextEvents?.title ?? "Next events"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-2">
          <span className="text-theme/60">{dict?.nextEvents?.prefix ?? ""}</span>{" "}
          {dict?.nextEvents?.content ?? "Upcoming events"}
        </h2>
        <p className="text-sm text-theme mb-8">
          {dict?.nextEvents?.description ?? ""}
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
          <Link href={`/${lang}/events/coming`}>
            <Button
              text={dict?.nextEvents?.seeMore ?? "See more"}
              variant="underlinePrimary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
