import { hasLocale, getDictionary, type Locale } from "../../dictionaries";
import { notFound } from "next/navigation";
import OrganismsShowcase from "./OrganismsShowcase";

export default async function OrganismsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="space-y-16">
      <h1 className="text-2xl font-bold text-theme">{dict.uiKit.organisms}</h1>
      <OrganismsShowcase dict={dict} lang={lang} />
    </div>
  );
}
