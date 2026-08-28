// Import needed librairies
import Link from "next/link";
import { useTranslations } from "next-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

// Import styles
import styles from "./SocialNetworks.module.scss";

export default function SocialNetworks() {
	const t = useTranslations("Footer.SocialNetworks");

	return (
		<div className={styles.socialNetworks}>
			<h3>{t("Title")}</h3>
			<div className={styles.logo}>
				<Link href={"https://www.facebook.com/interplusvalue"} target="_blank">
					<FontAwesomeIcon icon={faFacebook} />
				</Link>
				<Link href={"https://www.youtube.com/@associationinterplusvalue9348"} target="_blank">
					<FontAwesomeIcon icon={faYoutube} />
				</Link>
				<Link href={"https://www.linkedin.com/company/inter-value/?viewAsMember=true"} target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</Link>
			</div>
		</div>
	);
}
