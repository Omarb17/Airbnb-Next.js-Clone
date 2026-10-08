import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";

import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 shrink-0">
        <Image
          src={img}
          fill
          alt="InofoCardImg"
          objectFit="cover"
          className="rounded-2xl"
          unoptimized
        />
      </div>

      <div className="flex flex-col grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 grow">{description}</p>

        <div className="flex justify-between items-end pr-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-500 cursor-pointer" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
