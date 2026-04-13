"use client";

// Import external library
import React, { useEffect, useRef, useState } from "react";

// Import styles
import styles from "./Header.module.scss";

// Import components
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import MainNavigation from "./MainNavigation/MainNavigation";
import PartnersSubMenu from "./MainNavigation/PartnersSubMenu/PartnersSubMenu";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
	const [isPartnersMenuOpen, setIsPartnersMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Get translations
	const t_logo = useTranslations("Header");
	const locale = useLocale();

	const setMenuState = (state: boolean) => {
		setIsMenuOpen(state);
	};

	const headerRef = useRef<HTMLElement>(null);

	const togglePartnersMenu = (value: boolean) => {
		setIsPartnersMenuOpen(value);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
				setMenuState(false);
				return;
			}
		};

		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return (
		<header ref={headerRef}>
			<PartnersSubMenu isOpen={isPartnersMenuOpen} togglePartnersMenu={togglePartnersMenu} />
			<div className={styles.header}>
				<Link href={`/${locale}`}>
					<Image className={styles.logo} alt={t_logo("LogoDescription")} src="/C&F_Logo.gif" width={200} height={100} unoptimized />
				</Link>
				<MainNavigation togglePartnersMenu={togglePartnersMenu} />
				<MobileNavigation isMenuOpen={isMenuOpen} setMenuState={setMenuState} />
			</div>
		</header>
	);
}
