// Import styles
import styles from "./HisName.module.scss";

// Import libraries
import { useTranslations } from "next-intl";
import Image from "next/image";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";

export default function HisName() {
	const t = useTranslations("Pages.Project.HisName");
	const t_logo = useTranslations("Header");

	return (
		<RoundContainer className={styles.hisName}>
			<aside>
				<article>
					<div className={styles.description}>
						<Image src="/C&F_Logo.gif" alt={t_logo("LogoDescription")} width={200} height={100} unoptimized />
						<h2>
							{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
						</h2>
					</div>
					<p>{t("Description")}</p>
				</article>
			</aside>
		</RoundContainer>
	);
}
