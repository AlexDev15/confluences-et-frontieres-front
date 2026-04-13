"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Import styles
import styles from "./PartnersDescriptions.module.scss";

// Import components
import Button from "@/components/Button/Button";
import { useTranslations } from "next-intl";
import DownButton from "@/components/Button/DownButton/DownButton";

export default function PartnersDescription({ isFirst, nextPartnerId, name, iso, description, location, image, right, icon }: { isFirst: boolean; nextPartnerId?: string; name: string; iso: string; description: string; location: string; image: string; right?: boolean; icon: string }) {
	const t = useTranslations("Pages.Home.ProjectDescription");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const t_other = useTranslations("Others");

	const [containerSize, setContainerSize] = useState(isFirst ? 100 : 80);
	const articleRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const isScrollingRef = useRef(false);
	const containerSizeRef = useRef(isFirst ? 100 : 80);
	const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Fonction centralisée pour gérer le verrouillage du scroll
	const lockScroll = (duration: number = 1500) => {
		isScrollingRef.current = true;

		// Effacer les timeouts existants
		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
		}
		if (safetyTimeoutRef.current) {
			clearTimeout(safetyTimeoutRef.current);
		}

		// Timeout normal
		scrollTimeoutRef.current = setTimeout(() => {
			isScrollingRef.current = false;
		}, duration);

		// Timeout de sécurité (50% plus long) pour débloquer en cas de problème
		safetyTimeoutRef.current = setTimeout(() => {
			isScrollingRef.current = false;
		}, duration * 1.5);
	};

	const unlockScroll = () => {
		isScrollingRef.current = false;
		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
			scrollTimeoutRef.current = null;
		}
		if (safetyTimeoutRef.current) {
			clearTimeout(safetyTimeoutRef.current);
			safetyTimeoutRef.current = null;
		}
	};

	useEffect(() => {
		// Lancer la vidéo du premier partenaire au chargement
		if (isFirst && videoRef.current) {
			videoRef.current.play().catch(() => {
				// Ignorer les erreurs de play
			});
		}
	}, [isFirst]);

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (!articleRef.current) return;

			// Si on est en train de scroller, bloquer complètement l'événement
			if (isScrollingRef.current) {
				e.preventDefault();
				e.stopPropagation();
				return;
			}

			const rect = articleRef.current.getBoundingClientRect();
			const isInView = rect.top >= 0 && rect.top < window.innerHeight / 2;

			if (!isInView) return;

			const currentSize = containerSizeRef.current;

			// Scroll vers le bas
			if (e.deltaY > 0 && currentSize === 100) {
				// Si c'est le dernier partenaire (pas de nextPartnerId), ne rien faire
				if (!nextPartnerId) {
					return;
				}

				e.preventDefault();
				lockScroll(1300); // 300ms animation + 1000ms scroll

				// Réduire le container
				containerSizeRef.current = 80;
				setContainerSize(80);

				// Attendre la fin de l'animation puis scroller vers le suivant
				setTimeout(() => {
					if (nextPartnerId) {
						const nextElement = document.getElementById(nextPartnerId);
						if (nextElement) {
							nextElement.scrollIntoView({ behavior: 'smooth' });
						}
					}
				}, 300);
			}
			// Scroll vers le haut
			else if (e.deltaY < 0 && currentSize === 100 && !isFirst) {
				e.preventDefault();
				lockScroll(1300); // 300ms animation + 1000ms scroll

				// Réduire le container
				containerSizeRef.current = 80;
				setContainerSize(80);

				// Attendre la fin de l'animation puis scroller vers le précédent
				setTimeout(() => {
					const currentId = `partners-${location}`;
					const allPartners = document.querySelectorAll('[id^="partners-"]');
					let currentIndex = -1;

					allPartners.forEach((el, index) => {
						if (el.id === currentId) {
							currentIndex = index;
						}
					});

					if (currentIndex > 0) {
						allPartners[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
					}
				}, 300);
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (!articleRef.current) return;

			// Si on est en train de scroller, bloquer complètement l'événement
			if (isScrollingRef.current) {
				if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
					e.preventDefault();
					e.stopPropagation();
				}
				return;
			}

			const rect = articleRef.current.getBoundingClientRect();
			const isInView = rect.top >= 0 && rect.top < window.innerHeight / 2;

			if (!isInView) return;

			const currentSize = containerSizeRef.current;

			// Flèche vers le bas - aller au partenaire suivant
			if (e.key === 'ArrowDown' && currentSize === 100) {
				// Si c'est le dernier partenaire (pas de nextPartnerId), ne rien faire
				if (!nextPartnerId) {
					return;
				}

				e.preventDefault();
				lockScroll(1300); // 300ms animation + 1000ms scroll

				// Réduire le container
				containerSizeRef.current = 80;
				setContainerSize(80);

				// Attendre la fin de l'animation puis scroller vers le suivant
				setTimeout(() => {
					if (nextPartnerId) {
						const nextElement = document.getElementById(nextPartnerId);
						if (nextElement) {
							nextElement.scrollIntoView({ behavior: 'smooth' });
						}
					}
				}, 300);
			}
			// Flèche vers le haut - aller au partenaire précédent
			else if (e.key === 'ArrowUp' && currentSize === 100 && !isFirst) {
				e.preventDefault();
				lockScroll(1300); // 300ms animation + 1000ms scroll

				// Réduire le container
				containerSizeRef.current = 80;
				setContainerSize(80);

				// Attendre la fin de l'animation puis scroller vers le précédent
				setTimeout(() => {
					const currentId = `partners-${location}`;
					const allPartners = document.querySelectorAll('[id^="partners-"]');
					let currentIndex = -1;

					allPartners.forEach((el, index) => {
						if (el.id === currentId) {
							currentIndex = index;
						}
					});

					if (currentIndex > 0) {
						allPartners[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
					}
				}, 300);
			}
		};

		// Observer pour détecter quand la section devient visible
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						// Lancer la vidéo quand la section devient visible
						if (videoRef.current) {
							videoRef.current.play().catch(() => {
								// Ignorer les erreurs de play (par exemple si le navigateur bloque l'autoplay)
							});
						}

						// Si le container n'est pas déjà à 100%, l'agrandir
						if (containerSizeRef.current !== 100) {
							// Bloquer le scroll pendant l'agrandissement (300ms transition + 200ms marge)
							lockScroll(500);

							// Agrandir le container quand la section devient visible
							containerSizeRef.current = 100;
							setContainerSize(100);
						} else {
							// Si déjà à 100%, s'assurer que le scroll est débloqué
							unlockScroll();
						}
					} else if (!entry.isIntersecting) {
						// Mettre la vidéo en pause quand la section n'est plus visible
						if (videoRef.current) {
							videoRef.current.pause();
						}

						// Réduire les containers non visibles
						if (containerSizeRef.current === 100) {
							containerSizeRef.current = 80;
							setContainerSize(80);
						}
					}
				});
			},
			{ threshold: [0.5] }
		);

		if (articleRef.current) {
			observer.observe(articleRef.current);
		}

		window.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("keydown", handleKeyDown, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("keydown", handleKeyDown);
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}
			if (safetyTimeoutRef.current) {
				clearTimeout(safetyTimeoutRef.current);
			}
			if (articleRef.current) {
				observer.unobserve(articleRef.current);
			}
		};
	}, [location, nextPartnerId, isFirst]);

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
