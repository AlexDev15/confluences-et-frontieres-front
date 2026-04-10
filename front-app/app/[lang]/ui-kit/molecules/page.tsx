import { hasLocale, getDictionary, type Locale } from "../../dictionaries";
import { notFound } from "next/navigation";
import RoundContainer from "@/components/molecules/RoundContainer";
import EventCard from "@/components/molecules/EventCard";
import PartnersElement from "@/components/molecules/PartnersElement";
import PartnersMobileElement from "@/components/molecules/PartnersMobileElement";
import MoleculesShowcase from "./MoleculesShowcase";

export default async function MoleculesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="space-y-16">
      <h1 className="text-2xl font-bold text-theme">{dict.uiKit.molecules}</h1>

      {/* EventCard */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">EventCard</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          <EventCard
            name="1ere Biennale de Vimioso"
            date="2023-10-15"
            image="/C&F_Logo.gif"
            description="Premiere biennale interculturelle, transfrontaliere et europeenne organisee a Vimioso."
            url={`/${lang}/events`}
          />
          <EventCard
            name="Fresques murales a Bruz"
            date="2024-06-01"
            image="/C&F_Logo.gif"
            description="L'artiste Allan Halley peint quatre fresques murales a Bruz entre juin et septembre 2024."
            url={`/${lang}/events`}
          />
        </div>
      </section>

      {/* PartnersElement */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">PartnersElement (Desktop)</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          <PartnersElement image="/C&F_Logo.gif" name="Vimioso" description="Municipalite du nord-est du Portugal" location="Tras-os-Montes, Portugal" />
          <PartnersElement image="/C&F_Logo.gif" name="Ribadavia" description="Petite ville chargee d'histoire" location="Galice, Espagne" />
        </div>
      </section>

      {/* PartnersMobileElement */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">PartnersMobileElement</h2>
        <div className="max-w-sm">
          <PartnersMobileElement image="/C&F_Logo.gif" name="Prato" description="Ville dynamique et historique de Toscane" location="Toscane, Italie" />
        </div>
      </section>

      {/* RoundContainer */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">RoundContainer</h2>
        <RoundContainer>
          <p className="text-sm p-4">Content inside a RoundContainer with rounded corners and shadow.</p>
        </RoundContainer>
      </section>

      {/* Interactive molecules */}
      <MoleculesShowcase dict={dict} lang={lang} />
    </div>
  );
}
