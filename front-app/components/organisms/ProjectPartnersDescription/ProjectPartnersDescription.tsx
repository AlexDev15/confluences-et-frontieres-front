import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  image: string;
  location: string;
}

interface ProjectPartnersDescriptionProps {
  partners: Partner[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function ProjectPartnersDescription({
  partners,
  dict,
  lang,
}: ProjectPartnersDescriptionProps) {
  return (
    <section
      className="py-12 px-6"
      aria-label={dict?.projectPartners?.title ?? "Partners"}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-4">
          {dict?.projectPartners?.title ?? "Partners"}
        </h2>
        <p className="text-sm text-theme mb-2">
          {dict?.projectPartners?.description1 ?? ""}
        </p>
        <p className="text-sm text-theme mb-6">
          {dict?.projectPartners?.description2 ?? ""}
        </p>

        <h3 className="text-lg font-bold text-theme mb-6">
          {dict?.projectPartners?.subTitle ?? ""}
        </h3>

        <div className="grid grid-cols-2 desktop:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={`/${lang}/partners/${encodeURIComponent(partner.name)}`}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
            >
              <article className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-base font-bold text-on-primary">{partner.name}</h4>
                  <p className="text-xs text-on-primary/80">{partner.location}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
