// Import libraries
import { useTranslations } from "next-intl";

// Import styles
import styles from "./MainDescription.module.scss";

// Import components
import { MotionDiv } from "@/components/AnimatedLayout/MotionDiv";
import DownButton from "@/components/Button/DownButton/DownButton";

export default function MainDescription() {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_main = useTranslations("Pages.Project.MainDescription");
	const t_button = useTranslations("Others");

	return (
		<main className={styles.projectDescription}>
			<MotionDiv className={styles.beforeAnimate} variants={{ hidden: { x: -300, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
				<div className={styles.content}>
					<h1>{t("Title").toUpperCase()}</h1>
					<p>{t_main("Description")}</p>
				</div>
			</MotionDiv>
			<div className={styles.background}></div>
			<DownButton text={t_button("ScrollToSeeMore")} divToScroll="project-description" />
		</main>
	);
}
