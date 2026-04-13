// Import libraries
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import style
import styles from "./Productions.module.scss";

// Import components
import ProductionPreList from "./_ProductionsComponents/ProductionsPreList/ProductionPreList";

export async function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Productions")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function Events() {
	const t = useTranslations("Pages.Productions");

	return (
		<main className={styles.productions}>
			<div className={styles.container}>
				<video autoPlay muted loop playsInline className={styles.videoBackground}>
					<source src="/images/home/presentation_video.mp4" type="video/mp4"/>
				</video>
				<div className={styles.content}>
					<div className={styles.title}>
						<h1>
							NOS PRODUCTIONS
						</h1>
						<p>{t("lastUpdate", { date: "14-07-2024" })}</p>
					</div>
				</div>
			</div>
			<ProductionPreList />
		</main>
	);
}
