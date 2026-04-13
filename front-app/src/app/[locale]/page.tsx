// Import components
import ProjectDescription from "./_HomeComponents/ProjectDescription/ProjectDescription";
import Partners from "./_HomeComponents/Partners/page";
import Map from "./_HomeComponents/Map/Map";

// Import styles
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Activities from "@/app/[locale]/_HomeComponents/Activities/page";

export async function generateMetadata({ params, searchParams }: { params: { partnerName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Home")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
		openGraph: {
			images: "/C&F_Logo.gif",
			title: `${t("Home")} | ${t_home("ProjectDescription.Title")}`,
			description: "Organisation Non Gouvernementale",
			type: "website",
			url: "https://confront.website",
		},
	};
}

export default function Home() {
	return (
		<>
			<ProjectDescription />
			<Partners />
            <Activities />
			<Map />
		</>
	);
}
