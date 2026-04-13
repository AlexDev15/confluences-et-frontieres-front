// Import libraries
import { useTranslations } from "next-intl";
import Link from "next/link";

// Import styles
import styles from "./Contacts.module.scss";

export default function Contacts() {
	const t = useTranslations("Footer.Contacts");

	return (
		<div className={styles.contacts}>
			<h3>{t("Title")}</h3>

			<ul>
				<li>
					<u>{t("SocialPlace")}</u>: La Grimaudière, Bruz [Bretagne] France.
				</li>
				<li>
					<u>{t("Annexe")}</u>: Rua da Malhada, Vimioso [Trás-os-Montes] Portugal
				</li>
				<li>
					<u>{t("Email")}</u>:{" "}
					<Link href={`mailto:interplusvalue@gmail.com`}>
						<u>interplusvalue@gmail.com</u>
					</Link>
				</li>
			</ul>
		</div>
	);
}
