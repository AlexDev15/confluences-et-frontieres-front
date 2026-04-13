"use client";

// Import librairies
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// Import components
import SearchBar from "@/components/SearchBar/SearchBar";

// Import styles
import styles from "./MapMobileInformations.module.scss";
import PartnersList from "./PartnersList/PartnersList";

export default function MapMobileInformations({ mapRef, hidden }: { mapRef: any; hidden: boolean }) {
	const [searchInput, setSearchInput] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const menuRef = useRef<HTMLDivElement>(null);
	const partnersListRef = useRef<HTMLDivElement>(null);

	const t = useTranslations("Pages.Home.Map.Search");

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handleClickPartners = (value: boolean) => {
		setIsOpen(value);
	};

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
				return;
			}

			if (partnersListRef.current && partnersListRef.current.contains(e.target as Node)) {
				return;
			}

			setIsOpen(true);
		};

		document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	}, []);

	useEffect(() => {
		if (hidden) {
			setIsOpen(false);
		}
	}, [hidden]);

	return (
		<div className={`${styles.mapMobileInformations} ${hidden ? styles.hidden : ""} ${isOpen ? styles.open : ""}`} ref={menuRef}>
			<span className={styles.horizontalLine}></span>
			<SearchBar searchButton={false} className={styles.search} searchInput={searchInput} placeholder={t("Placeholder") + "..."} onChange={handleSearchInput} />
			<PartnersList searchInput={searchInput} mapRef={mapRef} handleClickPartners={handleClickPartners} ref={partnersListRef} />
		</div>
	);
}
