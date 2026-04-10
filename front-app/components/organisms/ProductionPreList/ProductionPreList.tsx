import Link from "next/link";
import EventCard from "@/components/molecules/EventCard";
import Button from "@/components/atoms/Button";

interface Production {
  name: string;
  date: string;
  image: string;
  description: string;
  url: string;
}

interface ProductionPreListProps {
  productions: Production[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function ProductionPreList({ productions, dict, lang }: ProductionPreListProps) {
  if (!productions || productions.length === 0) {
    return (
      <section className="py-12 px-6" aria-label={dict?.productions?.title ?? "Productions"}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-theme">
            {dict?.productions?.nothing1 ?? "No productions available"}
          </p>
          <p className="text-sm text-theme mt-2">
            {dict?.productions?.nothing2 ?? "Check back later."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6" aria-label={dict?.productions?.title ?? "Productions"}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-2">
          <span className="text-theme/60">{dict?.productions?.prefix ?? ""}</span>{" "}
          {dict?.productions?.content ?? "Productions"}
        </h2>
        <p className="text-sm text-theme mb-8">
          {dict?.productions?.description ?? ""}
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          {productions.slice(0, 3).map((production) => (
            <EventCard
              key={production.url}
              name={production.name}
              date={production.date}
              image={production.image}
              description={production.description}
              url={production.url}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href={`/${lang}/productions/list`}>
            <Button
              text={dict?.productions?.seeMore ?? "See more"}
              variant="underlinePrimary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
