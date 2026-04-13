// Imoort libraries
import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

// Import components
import Button from "@/components/Button/Button";

// Import styles
import styles from "./MainNavigation.module.scss";
import TranslationSelector from "../TranslationSelector/TranslationSelector";
import PartnersSubMenu from "./PartnersSubMenu/PartnersSubMenu";
import {useTheme} from "@/contexts/ThemeContext";

export default function MainNavigation({ togglePartnersMenu }: { togglePartnersMenu: (value: boolean) => void }) {
	const t = useTranslations("Header");
	const local = useLocale();
    const { setTheme } = useTheme();

	return (
		<menu className={styles.menu}>
			<ul className={styles.buttonsContainer}>
				<li>
					<Link
						href={`/${local}`}
						onClick={() => {
							togglePartnersMenu(false);
						}}
					>
						<Button text={t("Home").toUpperCase()} style="underlinePrimary" />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/partners`}
						onClick={() => {
							togglePartnersMenu(false);
						}}
					>
						<Button
							text={t("Partners").toUpperCase()}
							style="underlinePrimary"
							onMouseEnter={() => {
								togglePartnersMenu(true);
							}}
							onMouseLeave={() => {
								togglePartnersMenu(false);
							}}
						/>
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/project`}
						onClick={() => {
							togglePartnersMenu(false);
						}}
					>
						<Button text={t("Project").toUpperCase()} style="underlinePrimary" />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/events`}
						onClick={() => {
							togglePartnersMenu(false);
                            setTheme('evenements');
						}}
					>
						<Button text={t("Events").toUpperCase()} style="underlinePrimary" />
					</Link>
				</li>
				<li>
					<Link
						href={`/${local}/productions`}
						onClick={() => {
							togglePartnersMenu(false);
                            setTheme('productions');
						}}
					>
						<Button text={t("Productions").toUpperCase()} style="underlinePrimary" />
					</Link>
				</li>
			</ul>
			<TranslationSelector placement="bottom" />
		</menu>
	);
}
