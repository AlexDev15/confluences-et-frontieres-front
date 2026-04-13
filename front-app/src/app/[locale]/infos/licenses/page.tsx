// Import styles
import styles from "./Licenses.module.scss";

// Import libraries
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Import dependencies
import dependencies from "@/ressources/licenses";

export async function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Pages.Licenses" });
	const t_home = await getTranslations({ locale: params.locale, namespace: "Pages.Home" });

	return {
		title: `${t("Title")} | ${t_home("ProjectDescription.Title")}`,
		description: "This is the partner page",
	};
}

export default function Licenses() {
	const t = useTranslations("Pages.Licenses");

	return (
		<main className={styles.licenses}>
			<article>
				<h1>{t("Title")}</h1>
				<div className={styles.container}>
					<h2>{t("ScriptsTitle")}</h2>
					<div className={styles.category}>
						<h3>{t("Scripts")}</h3>
						<h3>{t("Licenses")}</h3>
						<h3>{t("Authors")}</h3>
					</div>
					<ul className={styles.scriptsList}>
						{dependencies.map((dep) => (
							<ol key={dep.name} className={styles.script}>
								<li className={styles.name}>
									<a href={dep.url} target="_blank">
										<p>{dep.name}</p>
									</a>
								</li>
								<li>
									<p>{dep.license}</p>
								</li>
								<li>
									<p>{dep.author}</p>
								</li>
							</ol>
						))}
					</ul>
				</div>
				<div className={styles.background}></div>
			</article>
		</main>
	);
}
