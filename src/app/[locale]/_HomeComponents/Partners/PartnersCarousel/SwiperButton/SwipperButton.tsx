"use client";

// Import external library
import React from "react";

// Import styles
import styles from "./SwipperButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SwipperButton({ direction, position, onClick }: { direction: string; position?: string; onClick?: () => void }) {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<button className={`${styles.swipperButton} ${direction === "left" ? styles.left : styles.right} ${position === "bottom" ? styles.bottom : styles.center}`} style={{ display: "block" }} onClick={onClick}>
			{direction === "left" && !isLoading ? <FontAwesomeIcon icon={faChevronLeft} /> : <></>}
			{direction === "right" && !isLoading ? <FontAwesomeIcon icon={faChevronRight} /> : <></>}
		</button>
	);
}
