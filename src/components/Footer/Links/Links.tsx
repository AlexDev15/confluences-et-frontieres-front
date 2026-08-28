// Import styles
import styles from "./Links.module.scss";

// Import librairies
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// Import components
import Button from "@/components/Button/Button";

export default function Links() {
	const t = useTranslations("Footer.Links");
	const locale = useLocale();

	return (
		<div className={styles.links}>
			<ul className={styles.linksList}>
				<li>
					<Link href={`/${locale}/infos/plan`}>
						<Button text={t("SiteMap")} style="underlineSecondary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link href={`/${locale}/infos/licenses`}>
						<Button text={t("Licenses")} style="underlineSecondary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link href={`/${locale}/infos/legal-notice`}>
						<Button text={t("LegalMentions")} style="underlineSecondary" className={styles.button} />
					</Link>
				</li>
			</ul>
			<p>{t("Copyright")}</p>
		</div>
	);
}
