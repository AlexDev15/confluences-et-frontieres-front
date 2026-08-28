// Import style
import styles from "./ActivitiesDescription.module.scss";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";

// Import libraries
import { useTranslations } from "next-intl";

export default function ActivitiesDescription() {
	const t = useTranslations("Pages.Project.ActivitiesDescription");

	return (
		<RoundContainer className={styles.activitiesDescription}>
			<aside>
				<article>
					<h2>
						{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
					</h2>
					<ol>
						<li>{t("List.1")}</li>
						<li>{t("List.2")}</li>
						<li>{t("List.3")}</li>
						<li>{t("List.4")}</li>
						<li>{t("List.5")}</li>
						<li>{t("List.6")}</li>
						<li>{t("List.7")}</li>
						<li>{t("List.8")}</li>
						<li>{t("List.9")}</li>
					</ol>
				</article>
			</aside>
		</RoundContainer>
	);
}
