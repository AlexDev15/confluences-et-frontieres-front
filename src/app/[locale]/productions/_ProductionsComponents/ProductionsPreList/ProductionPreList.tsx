// Import libraries
import { useLocale, useTranslations } from "next-intl";

// Import style
import styles from "./ProductionPreList.module.scss";

// Import components
import Event from "../../../events/_EventsComponents/Event/Event";
import Link from "next/link";
import Button from "@/components/Button/Button";

// Import external data
import { getProductions } from "@/ressources/productions";

export default function ProductionPreList() {
	const locale = useLocale();

	const t = useTranslations("Pages.Productions");
	const t_events = useTranslations("Productions");
	const production = getProductions();

	return (
		<section className={styles.productionsList}>
			<div className={styles.subtitle}>
				<h2>
					{t("AllProductions.Title.Prefix")} <span className={styles.secondColor}>{t("AllProductions.Title.Content")}</span>
				</h2>
			</div>
			{production.length !== 0 ? (
				<>
					{production.slice(0, 3).map((event, index) => (
						<Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.date} url={`/${locale}/productions/${event.linkID}`} location={event.location} />
					))}
					{production.length > 3 ? (
						<div className={styles.allProductionsBtn}>
							<Link href={`/${locale}/productions/list?page=1`}>
								<Button text={t("MorePrductions").toUpperCase()} style="squarePrimary" />
							</Link>
						</div>
					) : (
						<></>
					)}
				</>
			) : (
				<div className={styles.noProductions}>{t("Nothing1")}</div>
			)}
		</section>
	);
}