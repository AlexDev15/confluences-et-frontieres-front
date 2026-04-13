"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
type Props = {
	children: React.ReactNode;
	className?: string;
	variants?: Variants;
};

const isServer = typeof window === "undefined";

export const MotionDiv = ({ children, className, variants }: Props) => {
	if (isServer) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div className={className} variants={variants} initial="hidden" whileInView={"visible"} viewport={{ once: false }}>
			{children}
		</motion.div>
	);
};
export default MotionDiv;
