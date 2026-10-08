"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function MapClient({ searchResult }) {
  return <MapComponent searchResult={searchResult} />;
}
