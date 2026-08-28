// Import styles
import styles from "./PartnersDescription.module.scss";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Button from "@/components/Button/Button";
import PartnersElement from "./PartnersElement/PartnersElement";

// Import libraries
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Import partners
import partners from "@/ressources/partners";

export default function PartnersDescription() {
	const t = useTranslations("Pages.Project.PartnersDescription");

	return (
		<RoundContainer className={styles.partnersDescription}>
			<aside className={styles.mainContainer}>
				<div className={styles.description}>
					<span className={styles.titlePart}>
						<h2>
							{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
						</h2>
						<Image src="/municipio_de_vimioso_logo.jpg" alt={t("ImageDescription")} width={100} height={100} unoptimized />
					</span>
					<p>{t("Description1")}</p>
				</div>
				<Image src="/municipio_de_vimioso_logo.jpg" alt={t("ImageDescription")} width={100} height={100} />
			</aside>
			<p>{t("Description2")}</p>
			<h3>{t("SubTitle")}</h3>
			<aside className={styles.partnersContainer}>
				{partners.slice(0, 8).map((partner, index) => {
					if (index < 7) {
						return <PartnersElement key={index} name={partner.location} iso={partner.iso} logo={partner.icon} image={partner.image} />;
					}
					if (index === 7 && partners.length === 8) return <PartnersElement key={index} name={partner.location} iso={partner.iso} logo={partner.icon} image={partner.image} />;
					return (
						<div key={index} className={styles.morePartners} style={{ backgroundImage: `url(${partner.image})` }}>
							<div className={styles.container}>
								<Link href={`partners`}>
									<Button text={"VOIR PLUS"} style="squareSecondary" />
								</Link>
							</div>
						</div>
					);
				})}
			</aside>
		</RoundContainer>
	);
}
