"use client";

import { useRef, type KeyboardEvent, type ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onChange?: (value: string) => void;
  onValidate?: () => void;
  searchInput: string;
  placeholder?: string;
  searchButton: boolean;
  className?: string;
}

export default function SearchBar({
  onChange,
  onValidate,
  searchInput,
  placeholder = "",
  searchButton,
  className,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onValidate?.();
    }
  }

  const inputSection = (
    <>
      <Search size={20} className="text-theme shrink-0" aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="border-none outline-none bg-surface text-theme w-[90%] ml-2.5 placeholder:text-theme"
        aria-label={placeholder || "Search"}
      />
    </>
  );

  if (!searchButton) {
    return (
      <div
        className={`border-3 border-theme rounded-lg h-[50px] flex items-center px-2.5 bg-surface${className ? ` ${className}` : ""}`}
        role="search"
      >
        {inputSection}
      </div>
    );
  }

  return (
    <div
      className={`border-3 border-theme rounded-lg h-[50px] flex items-center bg-surface overflow-hidden${className ? ` ${className}` : ""}`}
      role="search"
    >
      <div className="flex items-center px-2.5 flex-1">
        {inputSection}
      </div>
      <button
        type="button"
        onClick={() => onValidate?.()}
        className="bg-theme text-on-primary w-[50px] phone:w-[35px] h-full flex items-center justify-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        aria-label="Search"
      >
        <Search size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
