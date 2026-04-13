// Import styles
import Link from "next/link";
import styles from "./SideBarNavigation.module.scss";
import Button from "@/components/Button/Button";
import { useLocale, useTranslations } from "next-intl";
import TranslationSelector from "../../TranslationSelector/TranslationSelector";

export default function SideBarNavigation({ isOpen, setMenuState }: { isOpen: boolean; setMenuState: (state: boolean) => void }) {
	const t = useTranslations("Header");
	const local = useLocale();

	return (
		<div className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
			<ul className={styles.buttonsContainer}>
				<li>
					<Link
						href={`/${local}`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Home").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/partners`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Partners").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/project`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Project").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/events`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Events").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/productions`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Productions").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/contacts`}
						onClick={() => {
							setMenuState(false);
						}}
					>
						<Button text={t("Contact").toUpperCase()} style="underlinePrimary" className={styles.button} />
					</Link>
				</li>
			</ul>
			<TranslationSelector placement="top" />
		</div>
	);
}
