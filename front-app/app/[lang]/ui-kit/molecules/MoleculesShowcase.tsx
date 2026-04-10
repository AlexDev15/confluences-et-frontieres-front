"use client";

import { useState } from "react";
import SearchBar from "@/components/molecules/SearchBar";
import Pagination from "@/components/molecules/Pagination";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MoleculesShowcase({ dict }: { dict: Record<string, any>; lang: string }) {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [page, setPage] = useState(1);

  return (
    <>
      {/* SearchBar without button */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">SearchBar (without button)</h2>
        <div className="max-w-md">
          <SearchBar
            searchInput={search1}
            onChange={setSearch1}
            placeholder={dict.pages.home.map.search.placeholder}
            searchButton={false}
          />
        </div>
      </section>

      {/* SearchBar with button */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">SearchBar (with button)</h2>
        <div className="max-w-md">
          <SearchBar
            searchInput={search2}
            onChange={setSearch2}
            placeholder={dict.pages.events.placeholder}
            searchButton={true}
            onValidate={() => alert("Search: " + search2)}
          />
        </div>
      </section>

      {/* Pagination */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">Pagination</h2>
        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
        <p className="text-sm text-on-surface/60 mt-2 text-center">Current page: {page}</p>
      </section>
    </>
  );
}
