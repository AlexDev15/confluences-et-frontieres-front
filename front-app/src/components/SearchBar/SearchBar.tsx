// Import libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Import styles
import styles from "./SearchBar.module.scss";

export default function SearchBar({ onChange, onValidate, searchInput, placeholder, searchButton, className }: { onChange?: (e: any) => void | undefined; onValidate?: () => void | undefined; searchInput: string; placeholder?: string; searchButton: boolean; className?: string }) {
	const onChangeCallback = (e: any) => {
		onChange && onChange(e);
	};

	const onKeyPress = (e: any) => {
		if (e.key === "Enter") {
			onValidate && onValidate();
		}
	};

	if (!searchButton) {
		return (
			<div className={`${styles.searchBar} ${className ? className : ""}`}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input onKeyDown={onKeyPress} onChange={onChangeCallback} value={searchInput} type="text" placeholder={placeholder ? placeholder : ""} />
			</div>
		);
	} else {
		return (
			<div className={styles.global}>
				<div className={`${styles.searchBar} ${className ? className : ""}`}>
					<input onKeyDown={onKeyPress} onChange={onChangeCallback} value={searchInput} type="text" placeholder={placeholder ? placeholder : ""} />
				</div>
				<button onClick={onValidate} className={styles.searchButton}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		);
	}
}
