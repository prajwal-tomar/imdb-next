"use client";
import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong. Please try again.</h1>
      <button
        className="bg-amber-600 hover:bg-amber-400 rounded-md px-2 py-1"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
