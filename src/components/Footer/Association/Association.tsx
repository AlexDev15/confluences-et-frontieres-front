// Import needed librairies
import Image from "next/image";
import { useTranslations } from "next-intl";

// Import styles
import styles from "./Association.module.scss";
import Link from "next/link";

export default function Association() {
	const t = useTranslations("Footer.Association");

	return (
		<div className={styles.association}>
			<div>
				<div>
					<h3>INTER+VALUE</h3>
					<p>{t("Description")}</p>
					<p>{t("ONG")}</p>
				</div>
				<Link href={"https://www.interplusvalue.org/"} target="_blank">
					<Image src="/I+V_LogoWithDesc.png" width={200} height={200} alt={t("LogoDescription")} />
				</Link>
			</div>
			<div className={styles.link}>
				<p>{t("MoreInformations")}</p>
				<Link href={"https://www.interplusvalue.org/"} target="_blank">
					<u>www.interplusvalue.org</u>
				</Link>
			</div>
			<Link href={"https://www.interplusvalue.org/"} target="_blank">
				<Image src="/I+V_LogoWithDesc.png" width={200} height={200} alt="" />
			</Link>
		</div>
	);
}
