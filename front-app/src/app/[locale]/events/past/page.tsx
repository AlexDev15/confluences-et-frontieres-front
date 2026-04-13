// Import styles
import styles from "./PastEvents.module.scss";

// Import libraries
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Content from "./Content";

export async function generateMetadata({ params, searchParams }: { params: {locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });
	const t_events = await getTranslations({ locale: params.locale, namespace: "Pages.Events" });

	return {
		title: `${t_events("PastEvents.Prefix")} ${t_events("PastEvents.Content")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function PastEvents() {


	return (
		<main className={styles.pastEvents}>
			<Content />
		</main>
	);
}
