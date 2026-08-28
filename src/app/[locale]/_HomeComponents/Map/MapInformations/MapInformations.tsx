"use client";

// Import librairies
import { useState } from "react";
import { useTranslations } from "next-intl";

// Import styles
import styles from "./MapInformations.module.scss";

// Import components
import PartnersList from "./PartnersList/PartnersList";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function MapInformations({ mapRef }: { mapRef: any }) {
	const [searchInput, setSearchInput] = useState("");
	const t = useTranslations("Pages.Home.Map.Search");

	const handleSearch = (e: any) => {
		setSearchInput(e.target.value);
	};

	return (
		<div className={styles.mapInformations}>
			<SearchBar searchButton={false} onChange={handleSearch} searchInput={searchInput} placeholder={t("Placeholder") + "..."} />
			<PartnersList mapRef={mapRef} searchInput={searchInput} />
		</div>
	);
}
