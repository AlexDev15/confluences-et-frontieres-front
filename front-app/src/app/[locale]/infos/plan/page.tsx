// Import styles
import styles from "./Plan.module.scss";

// Import librairies
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Pages.SitePlan" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Title")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function SitePlan() {
	const locale = useLocale();
	const t = useTranslations("Pages.SitePlan");

	return (
		<main className={styles.plan}>
			<article>
				<h1>{t("Title")}</h1>
				<div className={styles.container}>
					<ul>
						<li>
							<Link href={"/"}>{t("Home")}</Link>
						</li>
						<ul>
							<li>
								<Link href={`/${locale}#project-description`}>{t("ProjectDescription")}</Link>
							</li>
							<li>
								<Link href={`/${locale}#partners-overview`}>{t("PartnersDescription")}</Link>
							</li>
							<li>
								<Link href={`/${locale}#partners-map`}>{t("Map")}</Link>
							</li>
						</ul>
						<li>
							<Link href={`/${locale}/partners`}>{t("Partners")}</Link>
						</li>
						<li>
							<Link href={`/${locale}/project`}>{t("Project")}</Link>
						</li>
						<li>
							<Link href={`/${locale}/events`}>{t("Events")}</Link>
						</li>
						<ul>
							<li>
								<Link href={`/${locale}/events/past`}>{t("PastEvents")}</Link>
							</li>
							<li>
								<Link href={`/${locale}/events/coming`}>{t("NextEvents")}</Link>
							</li>
						</ul>
						<li>
							<Link href={`/${locale}/productions`}>{t("Productions")}</Link>
						</li>
						<ul>
							<li>
								<Link href={`/${locale}/productions/list`}>{t("ProductionsList")}</Link>
							</li>
						</ul>
						<li>
							<Link href={`/${locale}/contacts`}>{t("Contacts")}</Link>
						</li>
					</ul>
				</div>
			</article>
			<div className={styles.background}></div>
		</main>
	);
}
