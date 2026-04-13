// Import styles
import styles from "./List.module.scss";

// Import libraries
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Content from "./Content";

export async function generateMetadata({ params, searchParams }: { params: {locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });
	const t_events = await getTranslations({ locale: params.locale, namespace: "Pages.Productions" });

	return {
		title: `${t_events("Title.Prefix")} ${t_events("Title.Content")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function PastEvents() {


	return (
		<main className={styles.productions}>
			<Content />
		</main>
	);
}
