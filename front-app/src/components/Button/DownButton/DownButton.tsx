"use client";

// Import styles
import styles from "./DownButton.module.scss";

// Import external library
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function DownButton({ text, className, divToScroll }: { text?: string; className?: string; divToScroll: string }) {
  
    const [isLoading, setIsLoading] = useState(true);
	const [isTop, setIsTop] = useState(true);

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
  
    if (isLoading) return <></>;

    return (
        <button className={(isTop) ? styles.downButton : `${styles.downButton} ${styles.hidden}`}
        onClick={() => {
			if (!isTop) return;
            document.getElementById(divToScroll)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}>
            <FontAwesomeIcon icon={faChevronDown} />
            <p>{text?.toUpperCase()}</p>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
  )
}