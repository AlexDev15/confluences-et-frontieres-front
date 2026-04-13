"use client";

// Import libraries
import Slider from "react-slick";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

// Import styles
import styles from "./PartnersMobile.module.scss";
import "./Carousel.css";

// Import components
import SwipperButton from "../PartnersCarousel/SwiperButton/SwipperButton";

// Import partners
import partners from "@/ressources/partners";
import PartnersMobileElement from "./PartnersMobileElement/PartnersMobileElement";

var settings = {
	infinite: true,
	speed: 0,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <SwipperButton direction="right" position="bottom" />,
	prevArrow: <SwipperButton direction="left" position="bottom" />,
	dots: true,
};

export default function PartnersMobile() {
	const t = useTranslations("Partners");
	const swiperRef = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const customPaging = (i: number) => {
		return <div className={"dot"}></div>;
	};

	return (
		<article className={styles.partnersMobile}>
			<Slider
				{...settings}
				swipe={false}
				ref={swiperRef}
				className={"carousel"}
				customPaging={customPaging}
				afterChange={(index) => {
					setActiveSlide(index);
				}}
			>
				{partners.map((partner, index) => (
					<PartnersMobileElement key={`${partner}-${index}`} name={partner.location} iso={partner.iso} icon={partner.icon} description={t(`${partner.location}.description`)} location={t(`${partner.location}.location`)} />
				))}
			</Slider>
		</article>
	);
}
