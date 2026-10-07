import Image from "next/image";
import React from "react";

function SmallCard({ image, name, description, price }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-20 w-35">
        <Image src={image} fill className="rounded-lg" alt="SmallCardImg" />
      </div>

      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default SmallCard;
