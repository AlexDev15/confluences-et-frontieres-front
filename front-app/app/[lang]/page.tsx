import { hasLocale, getDictionary, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/templates/PageTemplate";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <PageTemplate>
      <section className="flex items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-theme">
          {dict.pages.home.projectDescription.title}
        </h1>
      </section>
    </PageTemplate>
  );
}
