"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { getEvents } from "@/ressources/events";
import styles from "./Gallery.module.scss";

export interface GalleryImage {
	src: string;
	ratio: "VERTICAL" | "HORIZONTAL";
}

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

const GRID_BREAKPOINTS = { default: 4, 1200: 3, 768: 2, 480: 1 };
const SIDE_BREAKPOINTS = { default: 2, 1024: 4, 768: 3, 480: 2 };

export default function EventGallery() {
	const params = useParams();
	const eventName = params?.eventName as string;
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

	const event = getEvents().find((event) => event.linkID === eventName);

	if (!event) notFound();

	const shuffledImages = useMemo(() => {
		const arr = [...GALLERY_IMAGES];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}, []);

	const handleImageClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setImagePosition({ x: rect.left, y: rect.top });
		setIsAnimating(true);
		setSelectedImage(index);
		setTimeout(() => setIsAnimating(false), 600);
	};

	const handleClose = () => {
		setSelectedImage(null);
		setIsAnimating(false);
	};

	const renderTile = (image: GalleryImage, index: number, small = false) => (
		<div
			key={index}
			className={`${styles.gridItem} ${small ? styles.smallItem : ""} ${
				image.ratio === "VERTICAL" ? styles.vertical : styles.horizontal
			}`}
			onClick={(e) => handleImageClick(index, e)}
		>
			<img src={image.src} alt={`Gallery image ${index + 1}`} />
		</div>
	);

	return (
		<main className={styles.galleryPage}>
			<div className={styles.header}>
				<h1>{event.linkID.toUpperCase()} - GALERIE</h1>
			</div>

			{selectedImage === null ? (
				<Masonry
					breakpointCols={GRID_BREAKPOINTS}
					className={styles.masonryGrid}
					columnClassName={styles.masonryColumn}
				>
					{shuffledImages.map((image, index) => renderTile(image, index))}
				</Masonry>
			) : (
				<div className={styles.selectedView}>
					<div className={styles.mainImageContainer}>
						<div
							className={`${styles.mainImage} ${
								shuffledImages[selectedImage].ratio === "VERTICAL"
									? styles.vertical
									: styles.horizontal
							} ${isAnimating ? styles.animating : ""}`}
							onClick={handleClose}
							style={
								isAnimating
									? ({
											"--start-x": `${imagePosition.x}px`,
											"--start-y": `${imagePosition.y}px`,
									  } as React.CSSProperties)
									: {}
							}
						>
							<img
								src={shuffledImages[selectedImage].src}
								alt={`Selected image ${selectedImage + 1}`}
							/>
						</div>
					</div>

					<div className={styles.otherImagesContainer}>
						<Masonry
							breakpointCols={SIDE_BREAKPOINTS}
							className={styles.masonryGrid}
							columnClassName={styles.masonryColumn}
						>
							{shuffledImages.map((image, index) =>
								index === selectedImage ? null : renderTile(image, index, true)
							)}
						</Masonry>
					</div>
				</div>
			)}
		</main>
	);
}
