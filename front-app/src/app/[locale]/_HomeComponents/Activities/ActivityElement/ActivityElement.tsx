"use client";

// Import libraries
import { useTranslations } from "next-intl";

// Import styles
import styles from "./ActivityElement.module.scss";

// Import Context
import { useTheme } from "@/contexts/ThemeContext";

export default function ActivityElement() {
    const t = useTranslations("Pages.Home.Activities");
    const { setTheme, theme } = useTheme();

    return (
        <div className={styles.activityElements}>

        </div>
    );
}
