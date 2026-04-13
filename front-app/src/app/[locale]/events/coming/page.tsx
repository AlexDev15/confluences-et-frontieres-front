// Import libraries
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// Import styles
import styles from "./ComingEvents.module.scss";

// Import external components
import Content from "./Content";

export async function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });
	const t_events = await getTranslations({ locale: params.locale, namespace: "Pages.Events" });

	return {
		title: `${t_events("NextEvents.Prefix")} ${t_events("NextEvents.Content")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function ComingEvents() {
	return (
		<main className={styles.comingEvents}>
			<Content />
		</main>
	);
}
