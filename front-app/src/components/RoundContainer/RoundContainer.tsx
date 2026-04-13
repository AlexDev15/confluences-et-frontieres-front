// Import libraries
import React from "react";

// Import styles
import styles from "./RoundContainer.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function RoundContainer({ children, className }: Props) {
	return <div className={`${styles.roundContainer} ${className}`}>{children}</div>;
}
