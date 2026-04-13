// Purpose: Define the layout of the application.
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Roboto } from "next/font/google";

// Import components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Import global styles
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	let messages;
	try {
		messages = (await import(`../../lang/translations/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={locale} className="root">
			<head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</head>
			<body className={roboto.className}>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									let theme = 'evenements';
									if (window.location.href.includes('productions')) {
										theme = 'productions';
									} else {
										const savedTheme = localStorage.getItem('app-theme');
										if (savedTheme === 'evenements' || savedTheme === 'productions') {
											theme = savedTheme;
										}
									}
									document.documentElement.setAttribute('data-theme', theme);
								} catch (e) {}
							})();
						`,
					}}
				/>
				<ThemeProvider>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<Header />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
