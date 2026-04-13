"use client";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Event from "../../events/_EventsComponents/Event/Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Import styles
import styles from "./List.module.scss";
import paginationStyles from "@/components/Pagination/Pagination.module.scss";

// Import Productions
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useEffect, useState, useRef, Component } from "react";

// Import types
import { getFilteredProductions, ProductionsResponse } from "@/ressources/productions";

export default function Content() {
	const params = useSearchParams();
	const page = params.get("page");
	const search = params.get("search");
	const router = useRouter();

	// Traduction

	const locale = useLocale();
	const t_productions = useTranslations("Productions");
	const t = useTranslations("Pages.Productions");

	// Search Logic

	const [searchInput, setSearchInput] = useState(search || "");
	const [productions, setProductions] = useState<ProductionsResponse>({ data: [], maxPage: 0 });
	const [loading, setLoading] = useState(true);

	const handleSearch = (e: any) => {
		setSearchInput(e.target.value);
	};

	const handleSearchSubmit = () => {
		if (searchInput === "") return router.push(window.location.pathname.replace(/&search=[^&]*/, ""));
        
		router.push(`list?page=1&search=${searchInput}`);
	};

	useEffect(() => {
		if ((page && isNaN(Number(page))) || !page) router.push("list?page=1" + (search ? `&search=${search}` : ""));

		setProductions(getFilteredProductions(10, Number(page) || 1, search || "", locale));
		setLoading(false);
	}, [search, page, locale, router]);

  return (
    <RoundContainer className={styles.container}>
    <div className={styles.title}>
        <h1>
            <span className={styles.secondColor}>{t("AllProductions.Title.Prefix")}</span> {t("AllProductions.Title.Content")}
        </h1>
        <p className={styles.subtitle}>{t("AllProductions.Description")}</p>
    </div>

    <div className={styles.horizontalBar}></div>

    <div className={styles.informations}>
        <SearchBar searchButton placeholder={t("AllProductions.Placeholder")} onValidate={handleSearchSubmit} onChange={handleSearch} searchInput={searchInput} />
        <p>{t("lastUpdate", { date: "14-07-2024" })}</p>
    </div>

    {productions.data.length === 0 ? (
        <div className={styles.noProduction}>
            {!loading ? (
                (search && search === "") || !search ? (
                    <>
                        <p>{t("Nothing1")}</p>
                        <p>{t("Nothing2")}</p>
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
        <div className={styles.allProductions}>
            {productions.data.map((production, index) => (
                <Event key={`${production.title}-${index}`} name={t_productions(`${production.linkID}.name`)} description={t_productions(`${production.linkID}.description`)} image={production.image} date={production.date} url={`/${locale}/productions/${production.linkID}`} location={production.location} />
            ))}
        </div>
    )}
    <ReactPaginate
        className={paginationStyles.pagination}
        activeClassName={paginationStyles.selected}
        pageCount={productions.maxPage}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        disabledClassName={paginationStyles.disabled}
        pageRangeDisplayed={1}
        forcePage={Number(page) - 1}
        onPageChange={(e) => {
            router.push(`list?page=${e.selected + 1}` + (search ? `&search=${search}` : ""));
        }}
    />
    <p className={styles.updatePhone}>{t("lastUpdate", { date: "14-07-2024" })}</p>
</RoundContainer>
  )
}
