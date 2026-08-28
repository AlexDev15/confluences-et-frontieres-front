// Import libraries
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import style
import styles from "./Events.module.scss";

// Import components
import Calendar from "./_EventsComponents/Calendar/Calendar";
import NextEvents from "./_EventsComponents/NextEvents/NextEvents";
import PastEvents from "./_EventsComponents/PastEvents/PastEvents";
import RoundContainer from "@/components/RoundContainer/RoundContainer";

export async function generateMetadata({ params, searchParams }: { params: { partnerName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Events")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function Events() {
	const t = useTranslations("Pages.Events");

	return (
		<main className={styles.events}>
            <div className={styles.container}>
                <video autoPlay muted loop playsInline className={styles.videoBackground}>
                    <source src="/images/home/presentation_video.mp4" type="video/mp4"/>
                </video>
                <div className={styles.content}>
                    <div className={styles.title}>
                        	<h1>
                                NOS ÉVENEMENTS
                        	</h1>
                        	<p>{t("lastUpdate", { date: "14-07-2024" })}</p>
                    </div>
                </div>
            </div>
			<NextEvents />
			<PastEvents />
			<Calendar />
		</main>
	);
}
