"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const baseClasses =
    "h-[50px] flex items-center border border-theme px-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme";

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-6">
      <ul className="flex">
        {/* Previous */}
        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            className={`${baseClasses} rounded-l-lg ${
              isFirstPage
                ? "opacity-30 pointer-events-none"
                : "hover:bg-theme/90 hover:text-on-primary"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
        </li>

        {/* Page numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => onPageChange(page)}
              className={`${baseClasses} ${
                page === currentPage
                  ? "bg-theme text-on-primary"
                  : "text-theme hover:bg-theme/90 hover:text-on-primary"
              }`}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
            className={`${baseClasses} rounded-r-lg ${
              isLastPage
                ? "opacity-30 pointer-events-none"
                : "hover:bg-theme/90 hover:text-on-primary"
            }`}
            aria-label="Next page"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
