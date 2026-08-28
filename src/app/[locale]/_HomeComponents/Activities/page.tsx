"use client";

// Import libraries
import { useTranslations } from "next-intl";

// Import styles
import styles from "./Activities.module.scss";

// Import Context
import { useTheme } from "@/contexts/ThemeContext";

// Import Components
import Button from "@/components/Button/Button";
import ActivityElement from "@/app/[locale]/_HomeComponents/Activities/ActivityElement/ActivityElement";

export default function Activities() {
	const t = useTranslations("Pages.Home.Activities");
    const { setTheme, theme } = useTheme();

	return (
		<aside id="partners-overview" className={styles.partners}>
			<div className={styles.content}>
				<h2>{t("Title").toUpperCase()}</h2>
				<p className={styles.description}>{t("Description")}</p>
			</div>
            <div className={'flex w-full justify-center gap-3'}>
                <Button text={"Évènements"} style={"underlinePrimary"} className={`${theme === 'productions' ? 'text-black text-xl' : 'text-xl'}`} callback={() => {setTheme("evenements")}} />
                <Button text={"Productions"} style={"underlinePrimary"} className={`${theme === 'evenements' ? 'text-black text-xl' : 'text-xl'}`} callback={() => {setTheme("productions")}} />
            </div>
            <div className={'flex gap-8 w-full justify-center'}>
                <ActivityElement />
                <ActivityElement />
                <ActivityElement />
            </div>
            <div className={'flex justify-end'}>
                <Button text={"DÉCOUVRIR"} style={'squarePrimary'} />
            </div>
		</aside>
	);
}
