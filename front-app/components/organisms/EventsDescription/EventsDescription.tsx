import Link from "next/link";
import EventCard from "@/components/molecules/EventCard";
import Button from "@/components/atoms/Button";

interface EventItem {
  name: string;
  date: string;
  image: string;
  description: string;
  url: string;
}

interface EventsDescriptionProps {
  events: EventItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function EventsDescription({ events, dict, lang }: EventsDescriptionProps) {
  if (!events || events.length === 0) {
    return (
      <section className="py-12 px-6" aria-label={dict?.project?.events?.title ?? "Events"}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-theme">
            {dict?.project?.events?.nothing1 ?? "No events available"}
          </p>
          <p className="text-sm text-theme mt-2">
            {dict?.project?.events?.nothing2 ?? "Check back later."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6" aria-label={dict?.project?.events?.title ?? "Events"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-2">
          <span className="text-theme/60">{dict?.project?.events?.prefix ?? ""}</span>{" "}
          {dict?.project?.events?.content ?? "Events"}
        </h2>
        <p className="text-sm text-theme mb-8">
          {dict?.project?.events?.description ?? ""}
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
              text={dict?.project?.events?.seeMore ?? "See more"}
              variant="underlinePrimary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
