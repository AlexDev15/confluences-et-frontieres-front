// Import libraries
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

// Import styles
import styles from "./PastEvents.module.scss";

// Import components
import Event from "../Event/Event";
import Button from "@/components/Button/Button";

// Import external data
import { getPastEvents, getNextEvents } from "@/ressources/events";
import RoundContainer from "@/components/RoundContainer/RoundContainer";

export default function PastEvents() {
	const locale = useLocale();

	const t = useTranslations("Pages.Events");
	const t_events = useTranslations("Events");
	const pastEvents = getPastEvents();
	const nextEvents = getNextEvents();

	// Appliquer le fond principal si il n'y a pas de prochains événements
	const hasNextEvents = nextEvents.data.length > 0;

	return (
        <section className={`${styles.pastEvents} ${!hasNextEvents ? styles.withPrimaryBg : ''}`}>
            <div className={styles.subtitle}>
                <h2>
                <span className={styles.secondColor}>{t("PastEvents.Prefix")}</span> {t("PastEvents.Content")}
                </h2>
            </div>
            {pastEvents.data.length !== 0 ? (
                <>
                    {pastEvents.data.slice(0, 3).map((event, index) => (
                        <Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.start} url={`/${locale}/events/event/${event.linkID}`} location={event.location} />
                    ))}
                    {pastEvents.data.length > 3 ? (
                        <div className={styles.previousEventsBtn}>
                            <Link href={`/${locale}/events/past?page=1`}>
                                <Button text={t("MoreEvents").toUpperCase()} style="squarePrimary" />
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <></>
            )}
        </section>
	);
}
