// Import styles
import styles from "./LinkedElement.module.scss";

// Import components
import Button from "@/components/Button/Button";

// Import libraries
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function LinkedElement({ title, image, linkID, isProduction }: { title: string, image: string, linkID: string, isProduction: boolean }) {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_flag = useTranslations("Header.FlagsDescriptions");

	const t_events = useTranslations("Events");
	const t_productions = useTranslations("Productions");

	const locale = useLocale();

	return (
		<div className={styles.partnersElement} style={{ backgroundImage: `url(${image})` }}>
			<div>
				<span className={styles.partnerInformations}>
					<p>{(isProduction) ? t_events(`${linkID}.name`) : t_productions(`${linkID}.name`)}</p>
				</span>
				<span className={styles.bar}></span>
				<Link className={styles.button} href={(!isProduction) ? `/${locale}/productions/${linkID}` : `/${locale}/events/event/${linkID}`}>
					<Button text={t("Discover").toUpperCase()} style="squareSecondary" />
				</Link>
			</div>
		</div>
	);
}
