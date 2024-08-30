"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log(genre);
  return (
    <div className="dark:bg-gray-600 bg-amber-100 flex justify-center gap-6 p-4">
      <Link
        className={`hover:text-amber-500 font-semibold ${
          genre === "fetchTrending"
            ? "underline underline-offset-8 decoration-4 decoration-amber-500"
            : ""
        }`}
        href={"/?genre=fetchTrending"}
      >
        Trending
      </Link>
      <Link
        className={`hover:text-amber-500 font-semibold ${
          genre === "fetchTopRated"
            ? "underline underline-offset-8 decoration-4 decoration-amber-500"
            : ""
        }`}
        href={"/?genre=fetchTopRated"}
      >
        Top Rated
      </Link>
    </div>
  );
}
