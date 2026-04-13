"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { getEvents } from "@/ressources/events";
import styles from "./Gallery.module.scss";

// Type pour les images de la galerie
export interface GalleryImage {
	src: string;
	ratio: "VERTICAL" | "HORIZONTAL";
}

// Données d'exemple - à remplacer par vos vraies données
const GALLERY_IMAGES: GalleryImage[] = [
	{ src: "https://picsum.photos/1920/1080?random=1", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=2", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=3", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=4", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=5", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=6", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=7", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=8", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=9", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=10", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=11", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=12", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=13", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=14", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=15", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=16", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=17", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=18", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=19", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=20", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=21", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=22", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=23", ratio: "HORIZONTAL" },
	{ src: "https://picsum.photos/1080/1920?random=24", ratio: "VERTICAL" },
	{ src: "https://picsum.photos/1920/1080?random=25", ratio: "HORIZONTAL" },
];

export default function EventGallery() {
	const params = useParams();
	const eventName = params?.eventName as string;
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
	const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

	const event = getEvents().find((event) => event.linkID === eventName);

	if (!event) notFound();

	const handleImageClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
		// Récupérer la position de l'image cliquée
		const rect = e.currentTarget.getBoundingClientRect();
		setImagePosition({ x: rect.left, y: rect.top });

		setIsAnimating(true);
		setSelectedImage(index);

		// Retirer l'animation après qu'elle soit terminée
		setTimeout(() => {
			setIsAnimating(false);
		}, 600);
	};

	const handleClose = () => {
		setSelectedImage(null);
		setIsAnimating(false);
	};

	// Séparer les images non sélectionnées
	const otherImages = selectedImage !== null
		? GALLERY_IMAGES.filter((_, index) => index !== selectedImage)
		: [];

	return (
		<main className={styles.galleryPage}>
			<div className={styles.header}>
				<h1>{event.linkID.toUpperCase()} - GALERIE</h1>
			</div>

			{selectedImage === null ? (
				// Vue grille Pinterest
				<div className={styles.pinterestGrid}>
					{GALLERY_IMAGES.map((image, index) => (
						<div
							key={index}
							ref={(el) => (imageRefs.current[index] = el)}
							className={`${styles.gridItem} ${
								image.ratio === "VERTICAL" ? styles.vertical : styles.horizontal
							}`}
							onClick={(e) => handleImageClick(index, e)}
						>
							<img src={image.src} alt={`Gallery image ${index + 1}`} />
						</div>
					))}
				</div>
			) : (
				// Vue avec image sélectionnée
				<div className={styles.selectedView}>
					<div className={styles.mainImageContainer}>
						<div
							className={`${styles.mainImage} ${
								GALLERY_IMAGES[selectedImage].ratio === "VERTICAL"
									? styles.vertical
									: styles.horizontal
							} ${isAnimating ? styles.animating : ""}`}
							onClick={handleClose}
							style={
								isAnimating
									? {
											"--start-x": `${imagePosition.x}px`,
											"--start-y": `${imagePosition.y}px`,
									  } as React.CSSProperties
									: {}
							}
						>
							<img
								src={GALLERY_IMAGES[selectedImage].src}
								alt={`Selected image ${selectedImage + 1}`}
							/>
						</div>
					</div>

					<div className={styles.otherImagesContainer}>
						<div className={styles.otherImages}>
							{otherImages.map((image, originalIndex) => {
								// Retrouver l'index original
								const realIndex = GALLERY_IMAGES.indexOf(image);

								return (
									<div
										key={realIndex}
										className={`${styles.gridItem} ${styles.smallItem} ${
											image.ratio === "VERTICAL" ? styles.vertical : styles.horizontal
										}`}
										onClick={(e) => handleImageClick(realIndex, e)}
									>
										<img src={image.src} alt={`Gallery image ${realIndex + 1}`} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
