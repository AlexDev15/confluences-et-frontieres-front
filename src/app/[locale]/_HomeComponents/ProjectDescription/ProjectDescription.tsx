// Import libraries
"use client";

// Import dependencies
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

// Import styles
import styles from "./ProjectDescription.module.scss";

// Import components
import Button from "@/components/Button/Button";

export default function ProjectDescription() {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_others = useTranslations("Others");
	const locale = useLocale();

	const [containerSize, setContainerSize] = useState(100);
	const sectionRef = useRef<HTMLElement>(null);
	const containerSizeRef = useRef(100);

	useEffect(() => {
        if (window.scrollY > 0) {
            setContainerSize(80);
            containerSizeRef.current = 80;
        }

		const handleWheel = (e: WheelEvent) => {
			if (!sectionRef.current) return;

			const currentScrollY = window.scrollY;
			const isAtTop = currentScrollY === 0;
			const currentSize = containerSizeRef.current;

            if (isAtTop) {
                if (e.deltaY > 0 && currentSize > 80) {
                    e.preventDefault();
                    const newSize = Math.max(80, currentSize - 2);
                    containerSizeRef.current = newSize;
                    setContainerSize(newSize);
                    return;
                }
                else if (e.deltaY < 0 && currentSize < 100) {
                    e.preventDefault();
                    const newSize = Math.min(100, currentSize + 2);
                    containerSizeRef.current = newSize;
                    setContainerSize(newSize);
                    return;
                }
                else if (e.deltaY > 0 && currentSize <= 80)
                    return;
                e.preventDefault();
                return;
            }
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => window.removeEventListener("wheel", handleWheel);
	}, []);

	return (
        <main ref={sectionRef} id="project-description" className={styles.projectDescription}>
            <div
				className={styles.boxContainer}
				style={{
					width: `${containerSize}%`,
					height: `${containerSize}%`,
					position: 'relative',
					transition: 'width 0.1s ease-out, height 0.1s ease-out, border 0.1s ease-out, border-radius 0.1s ease-out, border-color 0.3s ease-in-out',
					border: containerSize === 100 ? 'none' : '5px solid var(--theme-color)',
					borderRadius: containerSize === 100 ? '0' : '12px'
				}}
			>
                <video autoPlay muted loop playsInline className={styles.videoBackground}>
                    <source src="/images/home/presentation_video.mp4" type="video/mp4"/>
                </video>
                <div className={styles.container}>
                    <article className={styles.content}>
                        <h1>{t("Title").toUpperCase()}</h1>
                        <p>{t("Description")}</p>
                        <Link href={`/${locale}/project`}>
                            <Button text={t("Discover").toUpperCase()} style="squarePrimary"/>
                        </Link>
                    </article>
                </div>
            </div>
        </main>
    );
}
