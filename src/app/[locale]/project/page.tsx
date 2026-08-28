// Import libraries
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import external components
import UpButton from "@/components/Button/UpButton/UpButton";
import ActivitiesDescription from "./_projectComponents/ActivitiesDescription/ActivitiesDescription";
import EventsDescription from "./_projectComponents/EventsDescription/EventsDescription";
import HisName from "./_projectComponents/HisName/HisName";
import MainActivity from "./_projectComponents/MainActivity/MainActivity";
import MainBiennaleDescription from "./_projectComponents/MainBiennaleDescription/MainBiennaleDescription";
import MainDescription from "./_projectComponents/MainDescription/MainDescription";
import ObjectifsDescription from "./_projectComponents/ObjectifsDescription/ObjectifsDescription";
import PartnersDescription from "./_projectComponents/PartnersDescription/PartnersDescription";
import ProjectDescription from "./_projectComponents/ProjectDescription/ProjectDescription";

// Import styles
import styles from "./Project.module.scss";
import { useEffect } from "react";

export async function generateMetadata({ params, searchParams }: { params: { partnerName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Project")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function Project() {
	return (
		<div className={styles.project}>
			<MainDescription />
			<div className={styles.containers}>
				<ProjectDescription />
				<HisName />
				<PartnersDescription />
			</div>
			<MainActivity />
			<div className={styles.containers}>
				<ObjectifsDescription />
				<EventsDescription />
			</div>
			<MainBiennaleDescription />
			<div className={styles.containers}>
				<ActivitiesDescription />
			</div>
			<UpButton className={styles.button} />
		</div>
	);
}
