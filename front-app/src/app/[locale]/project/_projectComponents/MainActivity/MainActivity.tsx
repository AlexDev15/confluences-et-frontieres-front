// Import styles
import styles from "./MainActivity.module.scss";

// Import libraries
import { useTranslations } from "next-intl";

// Import components
import { MotionDiv } from "@/components/AnimatedLayout/MotionDiv";

export default function MainActivity() {
	const t = useTranslations("Pages.Project.MainActivity");

	return (
		<aside className={styles.mainActivity}>
			<MotionDiv className={styles.beforeAnimate} variants={{ hidden: { x: -300, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
				<article className={styles.content}>
					<h1>{t("Title")}</h1>
					<p>{t("Description")}</p>
				</article>
			</MotionDiv>
			<div className={styles.background}></div>
		</aside>
	);
}
