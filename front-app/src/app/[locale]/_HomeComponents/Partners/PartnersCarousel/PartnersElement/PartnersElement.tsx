// Import libraries
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

// Import styles
import styles from "./PartnersElement.module.scss";

// Import components
import Button from "@/components/Button/Button";

export default function PartnersElement({ image, name, icon, iso, description, location, main = false }: { image: string; name: string; iso: string; icon: string; description: string; location: string, main?: boolean }) {
	const t = useTranslations("Pages.Home.Partners");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const locale = useLocale();

	return (
		<section
			className={`${styles.partnersElement} ${main ? 'main' : ''}`}
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className={styles.content}>
				<div>
					<Image src={icon} alt={t_flag(iso)} width={100} height={50} />
					<h3>{name}</h3>
				</div>
				<p className={styles.location}>{location}</p>
				<p className={styles.description}>{description}</p>
				<Link href={`/${locale}/partners/${name.toLowerCase()}`}>
					<Button text={t("LearnMore").toUpperCase()} style="squareSecondary"></Button>
				</Link>
			</div>
		</section>
	);
}
