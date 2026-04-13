// Import styles
import styles from "./MainBiennaleDescription.module.scss";

// Import components
import { MotionDiv } from "@/components/AnimatedLayout/MotionDiv";

// Import libraries
import { useTranslations } from "next-intl";

export default function MainBiennaleDescription() {
	const t = useTranslations("Pages.Project.MainBiennaleDescription");

	return (
		<aside className={styles.mainBiennale}>
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
