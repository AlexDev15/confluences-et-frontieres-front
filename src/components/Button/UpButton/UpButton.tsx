"use client";

// Import styles
import styles from "./UpButton.module.scss";

// Import external library
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function SwipperButton({ className, onClick }: { className?: string; onClick?: () => void }) {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isTop, setIsTop] = React.useState(true);

	const handleScroll = () => {
		if (window.scrollY === 0) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	};

	React.useEffect(() => {
		setIsLoading(false);

		window.addEventListener("scroll", handleScroll);

		return () => removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<button
			className={(isTop) ? `${styles.hidden} ${className ? className : ""}` : `${styles.upButton} ${className ? className : ""}`}
			style={{ display: "block" }}
			onClick={() => {
				if (isTop) return;
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
		>
			{!isLoading ? <FontAwesomeIcon icon={faChevronUp} /> : <></>}
		</button>
	);
}
