"use client"

// Import external components
import LinkedElement from "./ProductionElements/LinkedElement";
import Button from "@/components/Button/Button";

// Import libraries
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Import styles
import styles from "./DetailsModal.module.scss";
import Link from "next/link";

// Import types
import { Production } from "@/ressources/productions";
import { Event } from "@/ressources/events";
import { useTranslations } from "next-intl";

export default function DetailsModal( { linkedProductions, event } : { linkedProductions: Production[] | Event[] , event: Production | Event }) {

    const [ isShowing, setIsShowing ] = useState(false);

    const params = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const t = useTranslations("Pages.Events.Individual.Details");
    const t_prod = useTranslations("Pages.Productions.Individual.Details");
    const t_lang = useTranslations("Header.LanguageSelector");

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!params.get("details") && isShowing)
            setIsShowing(false);
        if (params.get("details") && !isShowing) {
            setIsShowing(true);
        }

        // const handleClickOutside = (event: MouseEvent) => {
        //     if (modalRef.current && !modalRef.current.contains(event.target as Node) && isShowing) {
        //         setIsShowing(false);
        //         router.replace(pathname);
        //         return;
        //     }
        // };

        // document.addEventListener("click", handleClickOutside, true);


        // return () => {
        //     document.removeEventListener("click", handleClickOutside, true);
        // };
    
    }, [params, isShowing, pathname, router]);

    if (!isShowing)
        return <></>;

    return (
        <div className={styles.background}>
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.top}>
                    <Link className={styles.cancelButton} href={{pathname: window.location.pathname, query: {}}}>
                        <FontAwesomeIcon icon={faXmark} />
                    </Link>
                    <h1>{t("Title").toUpperCase()}</h1>
                </div>
                <div className={styles.content}>
                    {
                        (event && event.details) ?
                        <>
                            <h2>{t("MoreDetailsSubtitle")}:</h2>
                            <p>{(event.type === "production") ? t_prod("MoreDetailsDescription") : t("MoreDetailsDescription")}</p>
                            {
                                (!event || !event.details || (event && event.details && event.details?.length === 0)) ?
                                <></>
                                :
                                <>
                                    {event.details.map((detail, index) => (
                                    <div key={index} className={styles.detailsList} >
                                            <h3>{detail.title}</h3>
                                            <div key={index} className={`${styles.otherContentList} ${(detail.langs.length <= 1) ? "" : styles.otherContentListResponsive}`} style={{width: (detail.langs.length <= 2) ? "60%" : "80%" , gridTemplateColumns: (detail.langs.length < 3) ? `repeat( ${detail.langs.length}, 1fr )` : "repeat( 3, 1fr )"}}>
                                                {detail.langs.map((lang, index) => (
                                                    <Link key={index} href={lang.link} target="_blank" download={true}>
                                                        <Button text={t_lang(lang.lang).toUpperCase()} style={"squarePrimary"} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                        </>
                        :
                        <>
                        </>
                    }
                    {
                        (linkedProductions.length === 0) ?
                        <></>
                        :
                        <>
                            <h2>{t("LinkedEventsSubtitle")}:</h2>
                            <div className={styles.productionsList} style={{gridTemplateColumns: (linkedProductions.length === 1) ? "repeat( 1, 1fr)" : ""}}>
                                {linkedProductions.map((production) => (
                                    <LinkedElement key={production.linkID} title={production.title} image={production.image} linkID={production.linkID} isProduction={event.type === "production"} />
                                ))}
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}
