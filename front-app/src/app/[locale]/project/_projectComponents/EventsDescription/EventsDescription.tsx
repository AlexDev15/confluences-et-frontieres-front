// Import libraries
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

// Import style
import styles from "./EventsDescription.module.scss";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Event from "../../../events/_EventsComponents/Event/Event";
import Button from "@/components/Button/Button";

// Import events
import { getPastEvents } from "@/ressources/events";

export default function EventsDescription() {
	const pastEvents = getPastEvents();

	// Translations
	const locale = useLocale();
	const t = useTranslations("Pages.Events");
	const t_events = useTranslations("Events");

	return (
		<RoundContainer className={styles.eventsDescription}>
			<aside>
				<article>
					<h2>
						{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
					</h2>
					{pastEvents.data.length !== 0 ? (
						<>
							{pastEvents.data.slice(0, 2).map((event, index) => (
								<Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.start} url={`/${locale}/events/event/${event.linkID}`} location={event.location} />
							))}
							{pastEvents.data.length > 2 ? (
								<div className={styles.previousEventsBtn}>
									<Link href={`/${locale}/events/past?page=1`}>
										<Button text={t("LearnMore").toUpperCase()} style="squarePrimary" />
									</Link>
								</div>
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}
				</article>
			</aside>
		</RoundContainer>
	);
}
