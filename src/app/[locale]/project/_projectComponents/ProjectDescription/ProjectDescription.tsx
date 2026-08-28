// Import styles
import styles from "./ProjectDescription.module.scss";

// Import libraries
import { useTranslations } from "next-intl";
import Image from "next/image";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";

export default function ProjectDescription() {
	const t = useTranslations("Pages.Project.ProjectDescription");
	const t_logo = useTranslations("Footer.Association");

	return (
		<RoundContainer className={styles.projectDescription}>
			<aside id="project-description" className={styles.description}>
				<span className={styles.titlePart}>
					<h2>
						{t("Title.Prefix")} <span className={styles.blue}>{t("Title.Content")}</span>
					</h2>
					<Image src="/I+V_LogoWithoutDesc.png" alt={t_logo("LogoDescription")} width={100} height={100} />
				</span>
				<p>{t("Description")}</p>
			</aside>
			<Image src="/I+V_LogoWithoutDesc.png" alt={t_logo("LogoDescription")} width={300} height={300} />
		</RoundContainer>
	);
}
