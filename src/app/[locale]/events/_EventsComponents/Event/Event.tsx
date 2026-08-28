// Import libraries
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Import style
import styles from "./Event.module.scss";
import Link from "next/link";

type Props = {
	name: string;
	date: string;
	image: string;
	description: string;
	url: string;
	location?: string;
	program?: {
		lang: string;
		link: string;
	}[];
};

export default function Event({ name, date, image, description, url, location }: Props) {
	const t_partners = useTranslations("Pages.Home.Partners");

	return (
		<article className={styles.container}>
			<Image className={styles.image} width={960} height={540} unoptimized alt={name} src={image} />
			<div className={styles.phoneImage} style={{backgroundImage: `url(${image})`}}></div>
			<Link className={styles.titleLink} href={url} target="_blank">
				<h3 className={styles.title}>{name}</h3>
			</Link>
			<div className={styles.content}>
				<div>
					<Link className={styles.titleLink} href={url} target="_blank">
						<h3 className={styles.title}>{name}</h3>
					</Link>
					<p className={styles.date}>{date} - {location}</p>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.seeMore}>
					<Link href={url}>
						<p>{t_partners("LearnMore")}</p>
					</Link>
				</div>
			</div>
		</article>
	);
}
