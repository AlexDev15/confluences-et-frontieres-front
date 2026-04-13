// Import needed librairies
import React from "react";

// Import styles
import styles from "./Footer.module.scss";
import Association from "./Association/Association";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Contacts from "./Contacts/Contacts";
import Links from "./Links/Links";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
				<path
					fill="var(--theme-color)"
					fillOpacity="1"
					d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,165.3C560,160,640,160,720,181.3C800,203,880,245,960,240C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				></path>
			</svg>
			<div className={styles.content}>
				<div className={styles.informations}>
					<Association />
					<SocialNetworks />
					<Contacts />
				</div>
				<Links />
			</div>
		</footer>
	);
}
