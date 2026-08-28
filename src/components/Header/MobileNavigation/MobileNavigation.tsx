"use client";

// Import libraries
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Import styles
import styles from "./MobileNavigation.module.scss";
import SideBarNavigation from "./SideBarNavigation/SideBarNavigation";

export default function MobileNavigation({ isMenuOpen, setMenuState }: { isMenuOpen: boolean; setMenuState: (state: boolean) => void }) {
	return (
		<nav className={`${styles.mobileMenu}`}>
			<div
				className={`${styles.icon} ${isMenuOpen ? styles.hidden : ""}`}
				onClick={() => {
					setMenuState(true);
				}}
			>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div
				className={`${styles.icon} ${isMenuOpen ? "" : styles.hidden}`}
				onClick={() => {
					setMenuState(false);
				}}
			>
				<FontAwesomeIcon icon={faXmark} />
			</div>
			<SideBarNavigation isOpen={isMenuOpen} setMenuState={setMenuState} />
		</nav>
	);
}
