// Import style
import Link from "next/link";
import styles from "./PartnersSubMenu.module.scss";
import Button from "@/components/Button/Button";
import { useLocale, useTranslations } from "next-intl";

export default function PartnersSubMenu({ isOpen, togglePartnersMenu }: { isOpen: boolean; togglePartnersMenu: (value: boolean) => void }) {
	const t = useTranslations("Header.Country");
	const local = useLocale();

	return (
		<div
			className={`${styles.partnersSubMenu} ${isOpen ? styles.visible : ""}`}
			onMouseEnter={() => {
				togglePartnersMenu(true);
			}}
			onMouseLeave={() => {
				togglePartnersMenu(false);
			}}
		>
			<ul className={styles.partnersList}>
				<li>
					<h3>{t("France")}</h3>
					<div className={styles.partners}>
						<Link href={`/${local}/partners/bretagne`}>
							<Button text="Bretagne" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/rennes`}>
							<Button text="Rennes" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/bruz`}>
							<Button text="Bruz" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/ploumagoar`}>
							<Button text="Ploumagoar" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/timilin`}>
							<Button text="Timilin" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/ffcu`}>
							<Button text="FFCU" style="underlinePrimary"></Button>
						</Link>
					</div>
				</li>
				<li>
					<h3>{t("Portugal")}</h3>
					<div className={styles.partners}>
						<Link href={`/${local}/partners/vimioso`}>
							<Button text="Vimioso" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/miranda-do-douro`}>
							<Button text="Miranda do Douro" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/mogadouro`}>
							<Button text="Mogadouro" style="underlinePrimary"></Button>
						</Link>
					</div>
				</li>
				<li>
					<h3>{t("Italy")}</h3>
					<div className={styles.partners}>
						<Link href={`/${local}/partners/prato`}>
							<Button text="Prato" style="underlinePrimary"></Button>
						</Link>
					</div>
				</li>
				<li>
					<h3>{t("Romania")}</h3>
					<div className={styles.partners}>
						<Link href={`/${local}/partners/iaşi`}>
							<Button text="Iaşi" style="underlinePrimary"></Button>
						</Link>
						<Link href={`/${local}/partners/sibiu`}>
							<Button text="Sibiu" style="underlinePrimary"></Button>
						</Link>
					</div>
				</li>
				<li>
					<h3>{t("Spain")}</h3>
					<div className={styles.partners}>
						<Link href={`/${local}/partners/ribadavia`}>
							<Button text="Ribadavia" style="underlinePrimary"></Button>
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
}
