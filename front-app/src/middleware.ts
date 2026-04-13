import createMiddleware from "next-intl/middleware";
import { languages } from "./lang/languages";

export default createMiddleware({
	// A list of all locales that are supported
	locales: languages.map(({ code }) => code),

	// Used when no locale matches
	defaultLocale: "fr",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(fr|en|pt|es|gl)/:path*"],
};
