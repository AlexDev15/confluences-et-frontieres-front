// Import styles
import styles from "./LegalNotice.module.scss";

// Import libraries
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Pages.LegalMentions" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Title")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function LegalNotice() {
	const t = useTranslations("Pages.LegalMentions");
	const t_mail = useTranslations("Footer.Contacts");

	return (
		<main className={styles.legalNotice}>
			<article>
				<h1>{t("Title")}</h1>
				<div className={styles.informationsContainer}>
					<div className={styles.informationsCard}>
						<h2>INTER+VALUE</h2>

						<p>La Grimaudière</p>
						<p>35170 BRUZ</p>
						<p>{t("France")}</p>
					</div>
					<div className={styles.informationsCard}>
						<h2>Manuel de Lima</h2>

						<p>{t("Director")}</p>
						<p>{t("France")}</p>
					</div>
					<div className={styles.informationsCard}>
						<h2>Alexis Devloo</h2>

						<p>{t("Developer")}</p>
						<p>{t_mail("Email")}: <u><a href={`mailto:alexis.devloo.pro@gmail.com`}>alexis.devloo.pro@gmail.com</a></u></p>
						<p>{t("France")}</p>
					</div>
					<div className={styles.informationsCard}>
						<h2>Baptiste Sellier</h2>

						<p>{t("ContentAnimator")}</p>
						<p>{t("France")}</p>
					</div>
					<div className={styles.informationsCard}>
						<h2>Adèle Gaubicher</h2>

						<p>{t("ContentAnimator")}</p>
						<p>{t("France")}</p>
					</div>
				</div>
				<div className={styles.background}></div>
			</article>
		</main>
	);
}
