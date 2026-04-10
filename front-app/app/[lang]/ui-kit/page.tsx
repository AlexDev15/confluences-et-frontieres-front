import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function UIKitPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  const sections = [
    { title: dict.uiKit.atoms, description: "Buttons, icons, modals, badges", href: `/${lang}/ui-kit/atoms` },
    { title: dict.uiKit.molecules, description: "Search bars, cards, pagination", href: `/${lang}/ui-kit/molecules` },
    { title: dict.uiKit.organisms, description: "Header, Footer, Calendar, Map", href: `/${lang}/ui-kit/organisms` },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-theme mb-2">{dict.uiKit.title}</h1>
      <p className="text-base text-on-surface/60 mb-8">{dict.uiKit.overview}</p>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block p-6 rounded-lg border-2 border-theme/20 hover:border-theme hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-bold text-theme mb-2">{s.title}</h2>
            <p className="text-sm text-on-surface/60">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
