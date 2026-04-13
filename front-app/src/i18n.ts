import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { languages } from "./lang/languages";

// Can be imported from a shared config
const locales = languages.map(({ code }) => code);

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`./lang/translations/${locale}.json`)).default,
	};
});
