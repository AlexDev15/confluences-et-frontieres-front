// Import style
import styles from "./ObjectifsDescription.module.scss";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";

// Import libraries
import { useTranslations } from "next-intl";

export default function ObjectifsDescription() {
	const t = useTranslations("Pages.Project.ObjectifsDescription");

	return (
		<RoundContainer className={styles.objectifsDescription}>
			<aside>
				<article>
					<h2>
						{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
					</h2>
					<p>{t("Description")}</p>
					<ol>
						<li>{t("List.1")}</li>
						<li>{t("List.2")}</li>
						<li>{t("List.3")}</li>
					</ol>
				</article>
			</aside>
		</RoundContainer>
	);
}
