"use client";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Event from "../_EventsComponents/Event/Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Import styles
import styles from "./PastEvents.module.scss";
import paginationStyles from "@/components/Pagination/Pagination.module.scss";

// Import Events
import { getPastEvents } from "@/ressources/events";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

// Import types
import { EventsResponse } from "@/ressources/events";

export default function Content() {
	const params = useSearchParams();
	const page = params.get("page");
	const search = params.get("search");
	const router = useRouter();

	// Traduction

	const locale = useLocale();
	const t_events = useTranslations("Events");
	const t = useTranslations("Pages.Events");

	// Search Logic

	const [searchInput, setSearchInput] = useState(search || "");
	const [events, setEvents] = useState<EventsResponse>({ data: [], maxPage: 0 });
	const [loading, setLoading] = useState(true);

	const handleSearch = (e: any) => {
		setSearchInput(e.target.value);
	};

	const handleSearchSubmit = () => {
		if (searchInput === "") return router.push(window.location.pathname.replace(/&search=[^&]*/, ""));

		router.push(`past?page=1&search=${searchInput}`);
	};

	useEffect(() => {
		if ((page && isNaN(Number(page))) || !page) router.push("past?page=1" + (search ? `&search=${search}` : ""));

		setEvents(getPastEvents(10, Number(page) || 1, search || "", locale));
		setLoading(false);
	}, [search, page, locale, router]);

  return (
    <RoundContainer className={styles.container}>
    <div className={styles.title}>
        <h1>
            <span className={styles.secondColor}>{t("PastEvents.Prefix")}</span> {t("PastEvents.Content")}
        </h1>
        <p className={styles.subtitle}>{t("PastEvents.Description")}</p>
    </div>

    <div className={styles.horizontalBar}></div>

    <div className={styles.informations}>
        <SearchBar searchButton placeholder={t("Placeholder")} onValidate={handleSearchSubmit} onChange={handleSearch} searchInput={searchInput} />
        <p>{t("lastUpdate", { date: "14-07-2024" })}</p>
    </div>

    {events.data.length === 0 ? (
        <div className={styles.noEvents}>
            {!loading ? (
                (search && search === "") || !search ? (
                    <>
                        <p>{t("PastEvents.Nothing1")}</p>
                        <p>{t("PastEvents.Nothing2")}</p>
                    </>
                ) : (
                    <>
                        <p>{t("NotFound1")}</p>
                        <p>{t("NotFound2")}</p>
                    </>
                )
            ) : (
                <></>
            )}
        </div>
    ) : (
        <div className={styles.allEvents}>
            {events.data.map((event, index) => (
                <Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.start} url={`/${locale}/events/event/${event.linkID}`} location={event.location} />
            ))}
        </div>
    )}
    <ReactPaginate
        className={paginationStyles.pagination}
        activeClassName={paginationStyles.selected}
        pageCount={events.maxPage}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        disabledClassName={paginationStyles.disabled}
        pageRangeDisplayed={1}
        onPageChange={(e) => {
            router.push(`past?page=${e.selected + 1}` + (search ? `&search=${search}` : ""));
        }}
    />
    <p className={styles.updatePhone}>{t("lastUpdate", { date: "14-07-2024" })}</p>
</RoundContainer>
  )
}
