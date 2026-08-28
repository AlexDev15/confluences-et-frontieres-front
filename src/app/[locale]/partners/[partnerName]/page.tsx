// Import libraries
import { notFound } from "next/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";

// Import style
import styles from "./partnerIndividual.module.scss";

// Import Partners
import partners from "@/ressources/partners";

// Import components
import RoundContainer from "@/components/RoundContainer/RoundContainer";
import Event from "../../events/_EventsComponents/Event/Event";
import DownButton from "@/components/Button/DownButton/DownButton";

// Import external data
import { getPastEvents } from "@/ressources/events";

export async function generateMetadata({ params, searchParams }: { params: { partnerName: string; locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Header" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	const partner = partners.find((partner) => partner.location.toLowerCase() === decodeURI(params?.partnerName || ""));

	return {
		title: `${t_home("Partners.Title")} - ${partner?.location} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function IndividualPartner({ params }: { params?: { partnerName: string } }) {
	const partner = partners.find((partner) => partner.location.toLowerCase() === decodeURI(params?.partnerName || ""));
	const events = getPastEvents().data.filter((event) => event.partners.includes(partner?.location || ""));

	const locale = useLocale();

	const t = useTranslations("Partners");
	const t_page = useTranslations("Pages.Partners");
	const t_events = useTranslations("Events");
	const t_image = useTranslations("Others");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const t_other = useTranslations("Others");
	const t_site = useTranslations("Pages.Contacts");

	if (!partner) {
		notFound();
	}

	return (
		<div className={styles.partnerIndividual}>
			<main className={styles.presentation}>
				<div className={styles.content}>
					<span className={styles.title}>
						<Image src={partner.icon} alt={t_flag(partner.iso)} width={80} height={80} />
						<h1>{partner.location.toUpperCase()}</h1>
					</span>
					<p>{t(`${partner.location}.description`)}</p>
				</div>
				<div className={styles.background} style={{ backgroundImage: `url(${partner.image})` }}></div>
				<DownButton text={t_other("ScrollToSeeMore")} divToScroll={"partner-individual-second-part"}/>
			</main>
			<aside className={styles.secondPart}>
				<RoundContainer className={styles.mainDescription}>
					<h2 className={styles.topTitle}>{t(`${partner.location}.List.${partner.name}.name`)}</h2>
					<span className={styles.imageDescription}>
						<Image src={partner.imageLocation} alt={`${t_image("ImageOf", { something: t(`${partner.location}.List.${partner.name}.name`) })}`} className={styles.imageLocation} width={200} height={100} unoptimized />
						<div className={styles.phoneImage} style={{backgroundImage: `url(${partner.imageLocation})`}}></div>
					</span>
					<span className={styles.description} id="partner-individual-second-part">
						{/* <span> */}
							<h2 className={styles.bottomTitle}>{t(`${partner.location}.List.${partner.name}.name`)}</h2>
							<p className={styles.text}>{t(`${partner.location}.List.${partner.name}.description`)}</p>
						{/* </span> */}
						{/* <span className={styles.siteLink}>
							{(partner.contact?.siteLink) ? <>{t_site("Site")}: <a href={partner.contact.siteLink} target="__blank">{partner.contact.siteLink}</a></> : <></>}
						</span> */}
					</span>
				</RoundContainer>
				<RoundContainer className={styles.job}>
					<h2>
						<span className={styles.secondColor}>{t_page("part.Prefix")}</span> {t_page("part.Content")}
					</h2>
					<p>{t(`${partner.location}.List.${partner.name}.part`)}</p>
				</RoundContainer>
				{
					(events.length > 0) ?
					<RoundContainer className={styles.events}>
						<h2>
							{t_page("event.Prefix")} <span className={styles.secondColor}>{t_page("event.Content")}</span>
						</h2>
						<p className={styles.paragraphe}>{t(`${partner.location}.List.${partner.name}.event`)}</p>
						{events.map((event, index) => (
							<Event key={`${event.title}-${index}`} name={t_events(`${event.linkID}.name`)} description={t_events(`${event.linkID}.description`)} image={event.image} date={event.start} url={`/${locale}/events/event/${event.linkID}`} location={event.location} />
						))}
					</RoundContainer>
					:
					<></>
				}
			</aside>
		</div>
	);
}
