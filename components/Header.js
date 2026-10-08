"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setStartDate(new Date());
    setEndDate(new Date());
  }, []);

  const handleSelect = (ranges) => {
    (setStartDate(ranges.selection.startDate),
      setEndDate(ranges.selection.endDate));
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    const params = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      guests: noOfGuests.toString(),
    });

    router.push(`/search?${params.toString()}`);

    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid-cols-3 flex items-center justify-between  bg-white shadow-md py-5 px-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 w-40 cursor-pointer my-auto"
      >
        <Image
          src="/airbnbLogo.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="AirbnbLogo"
        />
      </div>

      <div className="relative">
        <div className="flex items-center md:border-2 md:w-150 border-red-300 rounded-full py-2 md:shadow-sm ">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="grow pl-5 bg-transparent outline-none text-black   placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start Your Search"}
          />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-black rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {searchInput && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center mb-4 mx-4">
              <h2 className="text-2xl grow font-semibold">Number Of Guests</h2>
              <UsersIcon className="hidden md:inline-flex h-8 text-black rounded-full p-2 cursor-pointer md:mx-2" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                max={10}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex mb-4">
              <button onClick={resetInput} className="grow text-gray-500">
                Cancel
              </button>
              <button onClick={search} className="grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
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
