"use client";

// Import necessary libraries
import React, { useState, useTransition } from "react";
import Select, { SingleValue } from "react-select";
import { useLocale, useTranslations } from "next-intl";

// Import styles
import styles from "./TranslationSelector.module.scss";
import "./Selector.css";

// Import translations
import { languages } from "@/lang/languages";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TranslationSelector({ placement }: { placement: "top" | "bottom" }) {
	const [isPending, startTransition] = useTransition();
	const t = useTranslations("Header.LanguageSelector");
	const t_flag = useTranslations("Header.FlagsDescriptions");
	const router = useRouter();
	const locale = useLocale();

	const options = languages.map((language) => {
		return {
			value: language.code,
			label: language.name,
			flag: language.flag,
		};
	});

	const [selected, setSelected] = useState(options.find((option) => locale === option.value));

	const handleChange = (selectedOption: SingleValue<{ value: string; label: string; flag: string }>) => {
		if (selectedOption) {
			startTransition(() => {
				setSelected(selectedOption);

				const url = window.location.href;
				let newUrl = url.replace(`/${locale}`, `/${selectedOption.value}`);

				router.replace(newUrl);
			});
		}
	};

	return (
		<Select
			placeholder={"Choisir une langue"}
			isClearable={false}
			isSearchable={false}
			options={options}
			value={selected}
			onChange={handleChange}
			menuPlacement={placement}
			isDisabled={isPending}
			classNamePrefix="react-select"
			className="languageSelector-container"
			styles={{
				control: (styles, { isFocused }) => ({
					...styles,
				}),
				singleValue: (styles) => ({
					...styles,
				}),
				placeholder: (styles) => ({
					...styles,
				}),
				option: (styles, { data, isFocused }) => ({
					...styles,
				}),
				dropdownIndicator: (styles) => ({
					...styles,
				}),
				indicatorsContainer: (styles) => ({
					...styles,
					transform: placement === "top" ? "rotate(180deg) translateX(200%)" : "scale(1.5) translateX(-10%)",
				}),
			}}
			formatOptionLabel={(lang) => (
				<div className={styles.languageOption}>
					<Image src={lang.flag} alt={t_flag(lang.value)} className={styles.flag} width={100} height={50} />
					<span>{t(lang.value).toUpperCase()}</span>
				</div>
			)}
		></Select>
	);
}
