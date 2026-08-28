"use client";

// Import libraries
import { useState } from "react";
import { useTranslations } from "next-intl";

// Import styles
import styles from "./Partners.module.scss";

// Import components
import PartnersCarousel from "./PartnersCarousel/PartnersCarousel";
import PartnersMobile from "./PartnersMobile/PartnersMobile";

export default function Partners() {
	const t = useTranslations("Pages.Home.Partners");

	return (
		<aside id="partners-overview" className={styles.partners}>
			<div className={styles.content}>
				<h2>{t("Title").toUpperCase()}</h2>
				<p className={styles.description}>{t("Description")}</p>
				<PartnersCarousel />
				<PartnersMobile />
			</div>
		</aside>
	);
}
