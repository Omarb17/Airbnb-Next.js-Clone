import Image from "next/image";
import React from "react";

function MediumCard({ image, title }) {
  return (
    <div className=" rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={image} fill className="rounded-lg" alt="SmallCardImg" />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
