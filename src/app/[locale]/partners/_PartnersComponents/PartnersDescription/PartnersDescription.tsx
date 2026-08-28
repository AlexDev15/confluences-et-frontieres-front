"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Import styles
import styles from "./PartnersDescriptions.module.scss";

// Import components
import Button from "@/components/Button/Button";
import { useTranslations } from "next-intl";

export default function PartnersDescription({ isFirst, nextPartnerId, name, iso, description, location, image, right, icon }: { isFirst: boolean; nextPartnerId?: string; name: string; iso: string; description: string; location: string; image: string; right?: boolean; icon: string }) {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const t_other = useTranslations("Others");

	const [containerSize, setContainerSize] = useState(isFirst ? 100 : 80);
	const articleRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Lancer la vidéo du premier partenaire au chargement
		if (isFirst && videoRef.current) {
			videoRef.current.play().catch(() => {
				// Ignorer les erreurs de play
			});
		}
	}, [isFirst]);

	useEffect(() => {
		const article = articleRef.current;
		if (!article) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						if (videoRef.current) {
							videoRef.current.play().catch(() => {
								// Ignorer les erreurs de play
							});
						}
						setContainerSize(100);
					} else if (!entry.isIntersecting) {
						if (videoRef.current) {
							videoRef.current.pause();
						}
						setContainerSize(80);
					}
				});
			},
			{ threshold: [0.5] }
		);

		observer.observe(article);

		return () => {
			observer.unobserve(article);
		};
	}, []);

	return (
		<article ref={articleRef} id={`partners-${location}`} className={styles.projectDescription}>
			<div
				className={`${styles.boxContainer} ${containerSize === 80 ? styles.reduced : ''}`}
				style={{
					width: `${containerSize}%`,
					height: `${containerSize}%`,
					transition: 'width 0.3s ease-out, height 0.3s ease-out',
				}}
			>
				<video ref={videoRef} muted loop playsInline className={styles.videoBackground}>
					<source src="/images/home/presentation_video.mp4" type="video/mp4"/>
				</video>
				<div className={`${styles.container} ${right ? styles.containerRight : ''}`}>
					{right ? (
						<section className={`${styles.content} ${styles.right}`}>
							<span className={styles.title}>
								<Image src={icon} alt={t_flag(iso)} width={80} height={80} />
								<h1>{location.toUpperCase()}</h1>
							</span>
							<p>{description}</p>
							<Link href={`partners/${location.toLocaleLowerCase()}`}>
								<Button text={t("Discover").toUpperCase()} style="squareSecondary" />
							</Link>
						</section>
					) : (
						<section className={styles.content}>
							<span className={styles.title}>
								<Image src={icon} alt={t_flag(iso)} width={80} height={80} />
								<h1>{location.toUpperCase()}</h1>
							</span>
							<p>{description}</p>
							<Link href={`partners/${location.toLocaleLowerCase()}`}>
								<Button text={t("Discover").toUpperCase()} style="squareSecondary" />
							</Link>
						</section>
					)}
				</div>
			</div>
		</article>
	);
}
