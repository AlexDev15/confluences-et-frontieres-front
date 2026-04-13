// Import Libraries
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

// Import Styles
import Button from "@/components/Button/Button";
import styles from "./NotFound.module.scss";

export default function NotFound() {
	const t = useTranslations("Pages.NotFound");
	const locale = useLocale();

	return (
		<main className={styles.notFound}>
			<div className={styles.page}>
				<div className={styles.container}>
					<h2 className={styles.number}>404</h2>
					<h2>{t("Title").toUpperCase()}</h2>
					<Link href={`/${locale}`}>
						<Button text={t("Button").toUpperCase()} style="squareSecondary" />
					</Link>
				</div>
				<div className={styles.background}></div>
			</div>
		</main>
	);
}
