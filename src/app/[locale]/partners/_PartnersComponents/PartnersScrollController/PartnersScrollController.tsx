"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function PartnersScrollController({ children }: { children: ReactNode }) {
	const isLockedRef = useRef(false);
	const lockTokenRef = useRef(0);

	useEffect(() => {
		const STABLE_FRAMES_TO_RELEASE = 10; // ~150 ms à 60 fps
		const ABSOLUTE_TIMEOUT_MS = 2000;

		const lock = () => {
			isLockedRef.current = true;
			const token = ++lockTokenRef.current;

			let lastY = window.scrollY;
			let stableFrames = 0;
			const startTime = performance.now();

			const check = () => {
				// Si un nouveau lock a été posé entre-temps, abandonner cette boucle
				if (lockTokenRef.current !== token) return;

				const currentY = window.scrollY;
				if (currentY === lastY) {
					stableFrames++;
				} else {
					stableFrames = 0;
					lastY = currentY;
				}

				const elapsed = performance.now() - startTime;

				// Release : scroll stable ET au moins 80 ms écoulés (laisse le scroll démarrer)
				if (stableFrames >= STABLE_FRAMES_TO_RELEASE && elapsed > 80) {
					isLockedRef.current = false;
					return;
				}

				// Safety absolu
				if (elapsed > ABSOLUTE_TIMEOUT_MS) {
					isLockedRef.current = false;
					return;
				}

				requestAnimationFrame(check);
			};

			requestAnimationFrame(check);
		};

		const getPartners = () =>
			Array.from(document.querySelectorAll<HTMLElement>('article[id^="partners-"]'));

		const getActiveIndex = (partners: HTMLElement[]) => {
			let activeIndex = 0;
			let minDistance = Infinity;
			partners.forEach((el, i) => {
				const distance = Math.abs(el.getBoundingClientRect().top);
				if (distance < minDistance) {
					minDistance = distance;
					activeIndex = i;
				}
			});
			return activeIndex;
		};

		const snapTo = (target: HTMLElement) => {
			lock();
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		};

		const navigate = (direction: 1 | -1): boolean => {
			const partners = getPartners();
			if (partners.length === 0) return false;

			const activeIndex = getActiveIndex(partners);
			const targetIndex = activeIndex + direction;

			if (targetIndex < 0 || targetIndex >= partners.length) {
				// Début ou fin de liste : laisser le scroll natif
				return false;
			}

			snapTo(partners[targetIndex]);
			return true;
		};

		const handleWheel = (e: WheelEvent) => {
			if (isLockedRef.current) {
				e.preventDefault();
				e.stopPropagation();
				return;
			}

			if (Math.abs(e.deltaY) < 5) return;

			const direction: 1 | -1 = e.deltaY > 0 ? 1 : -1;
			const handled = navigate(direction);
			if (handled) {
				e.preventDefault();
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

			if (isLockedRef.current) {
				e.preventDefault();
				e.stopPropagation();
				return;
			}

			const direction: 1 | -1 = e.key === "ArrowDown" ? 1 : -1;
			const handled = navigate(direction);
			if (handled) {
				e.preventDefault();
			}
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("keydown", handleKeyDown, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("keydown", handleKeyDown);
			// Invalide toute boucle de check en cours
			lockTokenRef.current++;
			isLockedRef.current = false;
		};
	}, []);

	return <>{children}</>;
}
