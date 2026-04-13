"use client";

// Import libraries
import tinycolor from "tinycolor2";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import { useLocale, useTranslations } from "next-intl";

import moment from "moment";
import "moment/min/locales";

// Import style
import "./Calendar.css";
import styles from "./Calendar.module.scss";
import RoundContainer from "@/components/RoundContainer/RoundContainer";

// Import events
import { getEvents } from "@/ressources/events";
import MobileList from "./MobileList/MobileList";

function RenderEventContent({ eventInfo, title }: { eventInfo: any; title: string }) {
	return (
		<div className={styles.event}>
			<div
				className={styles.round}
				style={{
					backgroundColor: tinycolor(eventInfo.backgroundColor === "" ? "#3788d8" : eventInfo.backgroundColor)
						.lighten(10)
						.toString(),
				}}
			></div>
			<b>{title}</b>
		</div>
	);
}

export default function EventCalendar() {
	const locale = useLocale();

	const t = useTranslations("Pages.Events.Calendar.Days");
	const t_event = useTranslations("Events");

	const [year, setYear] = useState<number>(0);
	const [month, setMonth] = useState<number>(0);

	return (
        <>
            <section className={styles.calendarSection}>
                <FullCalendar
                    firstDay={1}
                    eventContent={(args) => {
                        return <RenderEventContent eventInfo={args} title={t_event(`${args.event.extendedProps.linkID}.name`)} />;
                    }}
                    viewClassNames={styles.calendar}
                    dayMaxEvents={7}
                    eventClick={(info) => {
                        const allEvents = getEvents();

                        const event = allEvents.find((event) => event.title === info.event.title);
                        if (event) window.open(`/${locale}/events/event/${event.linkID}`);
                    }}
                    locales={allLocales}
                    locale={locale}
                    nextDayThreshold={"01:00:00"}
                    titleFormat={(args) => {
                        let localLocale = moment(`${args.date.year}-${args.date.month + 1}`, "YYYY-MM");
                        let date = localLocale.locale(locale);
                        let localeDate = date.format("MMMM YYYY");

                        setYear(args.date.year);
                        setMonth(args.date.month);

                        return localeDate.charAt(0).toUpperCase() + localeDate.slice(1);
                    }}
                    dayHeaderContent={(args) => {
                        return [t("Sunday"), t("Monday"), t("Tuesday"), t("Wednesday"), t("Thursday"), t("Friday"), t("Saturday")][args.date.getDay()].slice(0, 3) + ".";
                    }}
                    events={getEvents()}
                    plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]}
                    initialView="dayGridMonth"
                    dayHeaders={true}
                    showNonCurrentDates={false}
                    fixedWeekCount={false}
                    expandRows={false}
                    headerToolbar={{ start: "prev today next", center: "title", end: "" }}
                />
                <MobileList year={year} month={month} />
            </section>
        </>
	);
}
