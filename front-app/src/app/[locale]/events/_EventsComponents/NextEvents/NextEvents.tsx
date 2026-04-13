// Import libraries
import { useLocale, useTranslations } from "next-intl";

// Import style
import styles from "./NextEvents.module.scss";

// Import components
import Event from "../Event/Event";
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Link from "next/link";
import Button from "@/components/Button/Button";

// Import external data
import { getNextEvents } from "@/ressources/events";

export default function NextEvents() {
	const locale = useLocale();

	const t = useTranslations("Pages.Events");
	const t_events = useTranslations("Events");
	const nextEvents = getNextEvents();

	// Si il n'y a pas de prochains événements, ne rien afficher
	if (nextEvents.data.length === 0) {
		return null;
	}

	return (
        <section className={styles.nextEvents}>
            <div className={styles.subtitle}>
                <h2>
                    {t("NextEvents.Prefix")} <span className={styles.secondColor}>{t("NextEvents.Content")}</span>
                </h2>
            </div>
            {nextEvents.data.slice(0, 3).map((event, index) => (
                <Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.start} url={`/${locale}/events/event/${event.linkID}`} location={event.location} />
            ))}
            {nextEvents.data.length > 3 && (
                <div className={styles.nextEventsBtn}>
                    <Link href={`/${locale}/events/coming?page=1`}>
                        <Button text={t("MoreEvents").toUpperCase()} style="squarePrimary" />
                    </Link>
                </div>
            )}
        </section>
	);
}
