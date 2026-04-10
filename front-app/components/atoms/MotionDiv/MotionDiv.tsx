"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MotionDiv({ children, className, variants = defaultVariants }: MotionDivProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
