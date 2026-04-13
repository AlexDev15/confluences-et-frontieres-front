// Import libraries
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

// Import Button
import Button from "@/components/Button/Button";

// Import styles
import styles from "./PartnersMobileElement.module.scss";

export default function PartnersMobileElement({ name, iso, icon, description, location }: { name: string; iso: string; icon: string; description: string; location: string }) {
	const locale = useLocale();
	const t = useTranslations("Pages.Home.Partners");
	const t_flag = useTranslations("Header.FlagsDescriptions");

	return (
		<section className={styles.elementContainer}>
			<div className={styles.title}>
				<div>
					<Image src={icon} alt={t_flag(iso)} width={100} height={50} />
					<h3>{name}</h3>
				</div>
				<p className={styles.location}>{location}</p>
				<p className={styles.description}>{description}</p>
			</div>
			<Link href={`/${locale}/partners/${name.toLowerCase()}`}>
				<Button text={t("LearnMore").toUpperCase()} style="squareSecondary"></Button>
			</Link>
		</section>
	);
}
