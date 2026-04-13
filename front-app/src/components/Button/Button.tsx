"use client";

// Import external library
import React from "react";

// Import styles
import styles from "./Button.module.scss";

export default function Button({ className, text, style, callback, onMouseEnter, onMouseLeave, disabled }: { className?: string; text: string; style: string; callback?: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void; disabled?: boolean }) {
	const executeCallback = () => {
		if (callback) {
			callback();
		}
	};

	return (
		<button className={`${styles.button} ${styles[style]} ${className || ""} ${disabled ? styles.disabled : ""}`} onClick={executeCallback} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{text}
		</button>
	);
}
