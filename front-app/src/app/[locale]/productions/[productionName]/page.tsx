// Improt libraries
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import external components
import DetailsModal from "../../events/_EventsComponents/DetailsModal/DetailsModal";
import Button from "@/components/Button/Button";

// Import styles
import styles from "./ProductionDescription.module.scss";

// Import Productions and Events
import { getProductions } from "@/ressources/productions";
import { getEventsByProduction } from "@/ressources/events";

export async function generateMetadata({ params, searchParams }: { params: { productionName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });
	const t_production = await getTranslations({ locale: params.locale, namespace: "Productions" });

	const production = getProductions().find((production) => production.linkID === params?.productionName);

	if (!production)
		return {};

	return {
		title: `${t("Productions")} - ${t_production(`${production?.linkID}.name`)} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function ProductionDescription({ params }: { params?: { productionName: string } }) {
	const t = useTranslations("Productions");
	const t_page = useTranslations("Pages.Productions.Individual");
	const t_event = useTranslations("Pages.Events.Individual");

	const production = getProductions().find((production) => production.linkID === params?.productionName);
	
	if (!production) notFound();

	const linkedEvents = getEventsByProduction(production.linkID);

	return (
		<>
			<DetailsModal linkedProductions={linkedEvents} event={production} />
			<main className={styles.eventDescription}>
				<article className={styles.event}>
					<div className={styles.container}>
						<div className={styles.content}>
							<h1>{t(`${production.linkID}.name`).toUpperCase()}</h1>
							<div className={styles.date}>
								<p className={styles.organisation}>{t_page("OrganisationDate", { date: production.date })}</p>
							</div>
							<p>{t(`${production.linkID}.description`)}</p>
						</div>
						<div className={styles.date}>
								<p className={styles.organisation}>{t_page("OrganisationDate", { date: production.date })}</p>
						</div>
					</div>
					<div className={styles.program}>
					{
						(linkedEvents.length === 0 && !production.details) ?
						<></>
						:
						<Link href={{pathname: `${production.linkID}`, query: {details: true}}}>
							<Button text={t_event("MoreDetails").toUpperCase()} style="squareSecondary"/>
						</Link>
					}
					</div>
				</article>
				<div className={styles.background} style={{ backgroundImage: `url(${production.image})` }}></div>
			</main>
		</>
	);
}
