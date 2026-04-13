"use client";

// Import needed librairies
import { GoogleMap, Marker, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

// Import styles
import styles from "./Map.module.scss";

// import Partners
import Partners from "@/ressources/partners";
import MapInformations from "./MapInformations/MapInformations";
import MapMobileInformations from "./MapMobileInformations/MapMobileInformations";

const center = {
	lat: 44.27617641907801,
	lng: 7.480139402154863,
};

export default function Map() {
	const t_alt = useTranslations("Header.FlagsDescriptions");
	const t = useTranslations("Pages.Home.Partners");
	const t_partners = useTranslations("Partners");
	const locale = useLocale();

	const { ref, inView, entry } = useInView({
		threshold: 0.4,
	});

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.GOOGLE_API_KEY || "",
	});

	const [map, setMap] = useState(null);
	const [activeMarker, setActiveMarker] = useState<null | number>(null);

	const onLoad = useCallback(function callback(map: any) {
		map.setZoom(6);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	return (
		<aside id="partners-map" className={styles.map} ref={ref}>
            <div className={styles.container}>
                {isLoaded ? (
                    <GoogleMap
                        onClick={() => {
                            setActiveMarker(null);
                        }}
                        options={{ zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControlOptions: { position: google.maps.ControlPosition.TOP_LEFT } }}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        center={center}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {Partners.map((partner, index) => (
                            <MarkerF
                                key={index}
                                position={partner.position}
                                onClick={() => {
                                    setActiveMarker(index);
                                }}
                            >
                                {activeMarker === index ? (
                                    <InfoWindowF
                                        onCloseClick={() => {
                                            setActiveMarker(null);
                                        }}
                                    >
                                        <div className={styles.infoWindow}>
										<span className={styles.top}>
											<h3 className={styles.title}>{partner.location}</h3>
											<Image width={100} height={50} alt={t_alt(`${partner.iso}`)} src={partner.icon}></Image>
										</span>
                                            <p className={styles.location}>{t_partners(`${partner.location}.location`)}</p>
                                            <Link className={styles.link} href={`${locale}/partners/${partner.location.toLowerCase()}`}>
                                                <p>{t("LearnMore")}</p>
                                            </Link>
                                        </div>
                                    </InfoWindowF>
                                ) : (
                                    <></>
                                )}
                            </MarkerF>
                        ))}
                        <MapMobileInformations mapRef={map} hidden={!inView} />
                    </GoogleMap>
                ) : (
                    <></>
                )}
            </div>
            <MapInformations mapRef={map} />
		</aside>
	);
}
