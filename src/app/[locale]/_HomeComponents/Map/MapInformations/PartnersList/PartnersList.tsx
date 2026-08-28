"use client";

// Import librairies
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// Import styles
import styles from "./PartnersList.module.scss";

// Import partners
import partners, { Partner } from "@/ressources/partners";

export default function PartnersList({ mapRef, searchInput }: { mapRef: any; searchInput: string }) {
	const t = useTranslations("Partners");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const t_image = useTranslations("Others");
	const t_notfound = useTranslations("Pages.Home.Map.Search");

	const [partnersFiltered, setPartnersFiltered] = useState<Partner[]>(partners);

	const handleClick = (partner: Partner) => {
		mapRef.setZoom(10);
		mapRef.panTo({ lat: partner.position.lat, lng: partner.position.lng });
	};

	useEffect(() => {
		setPartnersFiltered(
			partners.filter((partner: Partner) => {
				return partner.location.toLowerCase().includes(searchInput.replace(/\s/g, "").toLowerCase());
			})
		);
	}, [searchInput]);

	return (
		<div className={styles.partnersList}>
			{partnersFiltered.map((partner, index) => {
				return (
					<div
						key={index}
						className={styles.partner}
						onClick={() => {
							handleClick(partner);
						}}
					>
						<div className={styles.partnerInformation}>
							<div className={styles.description}>
								<h4>{partner.location}</h4>
								<p>{t(`${partner.location}.location`)}</p>
								<p>{(partner.secondLocation) ? t(`${partner.location}.secondLocation`) : ""}</p>
								<p>{(partner.thirdLocation) ? t(`${partner.location}.thirdLocation`) : ""}</p>
							</div>
							<Image className={styles.logo} src={partner.icon} alt={t_flag(partner.iso)} width={100} height={50} />
						</div>
						<Image className={styles.image} alt={t_image("ImageOf", { something: partner.location })} src={partner.image} width={200} height={100} />
					</div>
				);
			})}
			{partnersFiltered.length === 0 && <p className={styles.noPartners}>{t_notfound("NotFound")}</p>}
		</div>
	);
}
