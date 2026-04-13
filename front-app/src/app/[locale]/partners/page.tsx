// Import external libraries
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import styles
import styles from "./Partners.module.scss";

// Import external components
import PartnersDescription from "./_PartnersComponents/PartnersDescription/PartnersDescription";
import UpButton from "../../../components/Button/UpButton/UpButton";

// Import partners
import Partner from "@/ressources/partners";

export async function generateMetadata({ params, searchParams }: { params: { partnerName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Partners")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function Partners() {
	const t_partners = useTranslations("Partners");

	return (
		<main className={styles.partners}>
			<UpButton className={styles.button} />
			{Partner.map((partner, index, array) => (
				<PartnersDescription key={`${partner.name} ${index}`} isFirst={index === 0} nextPartnerId={(index + 1 < array.length) ? `partners-${array[index + 1].location}` : ""} location={partner.location} iso={partner.iso} name={partner.name} description={t_partners(`${partner.location}.description`)} image={partner.image} icon={partner.icon} right={index % 2 !== 0} />
			))}
		</main>
	);
}
