import { hasLocale, getDictionary, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.pages.home.projectDescription.title,
    description: dict.pages.home.projectDescription.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = 'evenements';
                if (window.location.href.includes('productions')) {
                  theme = 'productions';
                } else {
                  var saved = localStorage.getItem('app-theme');
                  if (saved === 'evenements' || saved === 'productions') theme = saved;
                }
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.setAttribute('lang', '${lang}');
              } catch (e) {}
            })();
          `,
        }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-theme focus:text-on-primary focus:px-4 focus:py-2 focus:rounded"
      >
        {dict.accessibility.skipToContent}
      </a>
      <ThemeProvider>
        <Header lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
      </ThemeProvider>
    </>
  );
}
