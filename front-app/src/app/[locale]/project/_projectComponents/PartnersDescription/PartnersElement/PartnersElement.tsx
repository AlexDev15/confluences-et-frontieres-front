// Import styles
import styles from "./PartnersElement.module.scss";

// Import components
import Button from "@/components/Button/Button";

// Import libraries
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function PartnersElement({ name, iso, logo, image }: { name: string; iso: string; logo: string; image: string }) {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_flag = useTranslations("Header.FlagsDescriptions");

	return (
		<div className={styles.partnersElement} style={{ backgroundImage: `url(${image})` }}>
			<div>
				<span className={styles.partnerInformations}>
					<Image src={logo} alt={t_flag(iso)} width={100} height={50} />
					<p>{name}</p>
				</span>
				<span className={styles.bar}></span>
				<Link className={styles.button} href={`partners/${name.toLowerCase()}`}>
					<Button text={t("Discover").toUpperCase()} style="squareSecondary" />
				</Link>
			</div>
		</div>
	);
}
