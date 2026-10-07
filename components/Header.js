import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid-cols-3 flex items-center justify-between  bg-white shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center h-10 w-40 cursor-pointer my-auto">
        <Image
          src="/airbnbLogo.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="AirbnbLogo"
        />
      </div>

      <div className="flex items-center md:border-2 border-red-300 rounded-full py-2 md:shadow-sm ">
        <input
          className="grow pl-5 bg-transparent outline-none text-black   placeholder-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-black rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer " />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full border-gray-300">
          <Bars3Icon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
