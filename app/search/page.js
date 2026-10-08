import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import MapClient from "@/components/MapClient";
import { format } from "date-fns";
import React from "react";

async function search({ searchParams }) {
  const imageMap = {
    "https://links.papareact.com/xqj":
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://links.papareact.com/6as":
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    "https://links.papareact.com/xhc":
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    "https://links.papareact.com/pro":
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "https://links.papareact.com/8w2":
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  };

  const res = await fetch("https://links.papareact.com/isz", {
    cache: "force-cache",
  });

  const searchResult = await res.json();

  const Params = await searchParams;

  const location = Params.location;
  const startDate = Params.startDate;
  const endDate = Params.endDate;
  const noOfGuests = Params.guests;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="min-h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-2">
            stay in {location}
          </h1>
          <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-600 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult
              .filter((item) => imageMap[item.img])
              .map((item) => (
                <InfoCard
                  key={item.img}
                  img={imageMap[item.img]}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              ))}
          </div>
        </section>

        <section className="hidden sticky top-20 self-start lg:flex xl:min-w-200 ">
          <MapClient searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;
