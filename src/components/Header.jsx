import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

export const Header = () => {
  return (
    <div className="flex justify-between p-3 max-w-6xl items-center mx-auto">
      <div className="flex space-x-5 items-center">
        <Link href={"/"}>
          <h1 className="hover:text-amber-500">HOME</h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="hover:text-amber-500">ABOUT</h1>
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        <DarkModeSwitch />
        <Link
          href={"/"}
          className="text-xl bg-amber-500 rounded-md py-1 px-3 font-bold"
        >
          IMDb
        </Link>
      </div>
    </div>
  );
};
