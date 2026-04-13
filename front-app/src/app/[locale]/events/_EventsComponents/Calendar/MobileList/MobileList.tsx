"use client";

// Import style
import styles from "./MobileList.module.scss";

// Import libraries
import moment from "moment";
import "moment/min/locales";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import tinycolor from "tinycolor2";

// Import events
import { EventsByDay, getEventsByDay, getEvents } from "@/ressources/events";

export default function MobileList({ month, year }: { year: number; month: number }) {
	const [eventsByDay, setEventsByDay] = useState<EventsByDay[]>([]);

	// Translations
	const locale = useLocale();

	const t = useTranslations("Pages.Events.Calendar");
	const t_event = useTranslations("Events");
	const t_partners = useTranslations("Pages.Home.Partners");

	const getMonthAndYear = (month: number, year: number) => {
		let localLocale = moment(`${year}-${month + 1}`, "YYYY-MM");
		let date = localLocale.locale(locale);
		let localeDate = date.format("MMMM YYYY");

		return { month: localeDate.split(" ")[0], year: localeDate.split(" ")[1] };
	};

	const getDayName = (date: string) => {
		const dayNumber = new Date(date).getDay();

		if (dayNumber < 0 || dayNumber > 6) return "";
		return [t("Days.Monday"), t("Days.Tuesday"), t("Days.Wednesday"), t("Days.Thursday"), t("Days.Friday"), t("Days.Saturday"), t("Days.Sunday")][dayNumber];
	};

	const getDayNumber = (date: string) => {
		return new Date(date).getDate();
	};

	useEffect(() => {
		setEventsByDay(getEventsByDay(month, year));
	}, [month, year]);

	const onEventClick = (title: string) => {
		const allEvents = getEvents();

		const event = allEvents.find((event) => event.title === title);
		if (event) window.open(`/${locale}/events/event/${event.linkID}`);
	};

	return (
		<div className={styles.mobileList}>
			{eventsByDay.length === 0 && <p className={styles.noEvents}>{t("NoEvents", { month: getMonthAndYear(month, year).month, year: year })}</p>}
			{eventsByDay.map((element, index) => {
				return (
					<div key={element.date} className={styles.eventsDateCategory}>
						<h3>{`${getDayName(element.date)} ${getDayNumber(element.date)}`}</h3>
						<div>
							{element.events.map((event) => {
								return (
									<div
										key={event.title}
										className={styles.event}
										onClick={() => {
											onEventClick(event.title);
										}}
									>
										<h4>{t_event(`${event.linkID}.name`)}</h4>
										<p>{t_partners("LearnMore")}</p>
										<div
											className={styles.bottom}
											style={{
												backgroundColor: tinycolor(event.color === "" ? "#3788d8" : event.color)
													.lighten(10)
													.toString(),
											}}
										></div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
