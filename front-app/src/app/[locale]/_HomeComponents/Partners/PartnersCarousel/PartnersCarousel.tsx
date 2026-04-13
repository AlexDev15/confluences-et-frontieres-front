"use client";

// Import libraries
import Slider from "react-slick";
import {useRef, useState} from "react";
import { useTranslations } from "next-intl";

// Import components
import PartnersElement from "./PartnersElement/PartnersElement";
import SwipperButton from "./SwiperButton/SwipperButton";

// Import styles
import styles from "./PartnersCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import partners
import partners from "@/ressources/partners";

var settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: <SwipperButton direction="right" />,
	prevArrow: <SwipperButton direction="left" />,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1720,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 830,
			settings: {
				slidesToShow: 2,
			},
		},
	],
};

export default function PartnersCarousel() {
	const t = useTranslations("Partners");
	const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

	return (
		<article className={styles.partnersContainer}>
			<Slider {...settings} swipe={false} ref={swiperRef} className={styles.carousel}
                afterChange={(index) => {
                    setActiveSlide(index);
                }}>
				{partners.map((partner, index) => (
					<PartnersElement key={`${partner}-${index}`} image={partner.image} name={partner.location} iso={partner.iso} icon={partner.icon} description={t(`${partner.location}.description`)} location={t(`${partner.location}.location`)} main={true} />
				))}
			</Slider>
		</article>
	);
}
