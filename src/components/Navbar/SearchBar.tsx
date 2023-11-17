"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);
  let keywords = searchRef.current?.value;
  console.log("ini keywords: ", keywords);

  return (
    <div className="w-52 max-w-lg md:w-full lg:max-w-xs">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Anime"
          type="search"
          ref={searchRef}
          onChange={(e) => {
            keywords = e.target.value;
            console.log("ini keywords: ", keywords);
          }}
        />
      </div>
    </div>
  );
}
