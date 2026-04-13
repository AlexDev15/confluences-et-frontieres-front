// Improt libraries
import { useLocale, useTranslations } from "next-intl";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import styles
import styles from "./EventDescription.module.scss";

// Import Events
import { getEvents } from "@/ressources/events";
import { isDateIsInThePast } from "@/utils/date";

// Import Production
import { getProductionsByEvent } from "@/ressources/productions";

import Button from "@/components/Button/Button";
import DetailsModal from "../../_EventsComponents/DetailsModal/DetailsModal";

export async function generateMetadata({ params, searchParams }: { params: { eventName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });
	const t_event = await getTranslations({ locale: params.locale, namespace: "Events" });

	const event = getEvents().find((event) => event.linkID === params?.eventName);

	if (!event)
		return {};

	return {
		title: `${t("Events")} - ${t_event(`${event?.linkID}.name`)} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function EventDescription({ params }: { params?: { eventName: string } }) {
	const t = useTranslations("Events");
	const t_page = useTranslations("Pages.Events.Individual");

	const event = getEvents().find((event) => event.linkID === params?.eventName);

	if (!event) notFound();

	const linkedProductions = getProductionsByEvent(event.linkID);

	return (
		<>
			<DetailsModal linkedProductions={linkedProductions} event={event} />
			<main className={styles.eventDescription}>
				<article className={styles.event}>
					<div className={styles.container}>
						<div className={styles.content}>
							<h1>{t(`${event.linkID}.name`).toUpperCase()}</h1>
							<div className={styles.date}>
								<p className={styles.dateInfo}>{isDateIsInThePast(new Date(event.start)) ? t_page("AlreadyPassed") : t_page("Coming")}</p>
								<p className={styles.organisation}>{t_page("OrganisationDate", { date: event.start })}</p>
							</div>
							<p>{t(`${event.linkID}.description`)}</p>
						</div>
						<div className={styles.date}>
							<p className={styles.dateInfo}>{isDateIsInThePast(new Date(event.start)) ? t_page("AlreadyPassed") : t_page("Coming")}</p>
							<p className={styles.organisation}>{t_page("OrganisationDate", { date: event.start })}</p>
						</div>
					</div>
					<div className={styles.details}>
						{
							(linkedProductions.length === 0 && !event.details) ?
							<></>
							:
							<Link href={{pathname: `${event.linkID}`, query: {details: true}}}>
								<Button text={t_page("MoreDetails").toUpperCase()} style="squareSecondary"/>
							</Link>
						}
					</div>
				</article>
				<div className={styles.background} style={{ backgroundImage: `url(${event.image})` }}></div>
			</main>
		</>
	);
}
