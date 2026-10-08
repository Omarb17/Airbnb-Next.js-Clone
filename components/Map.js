"use client";

import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
console.log("Mapbox token loaded:", process.env.NEXT_PUBLIC_MAPBOX_KEY);
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

function MapComponent({ searchResult }) {
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  console.log(coordinates);
  const [viewPort, setViewPort] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="h-230 w-200">
      <Map
        mapStyle="mapbox://styles/omarb17/cmuyq8ctc003w01sg8hz8f1wr"
        onMove={(event) => setViewPort(event.viewState)}
        initialViewState={viewPort}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        projection="mercator"
        {...viewPort}
        style={{ width: "100%", height: "100%" }}
      >
        {searchResult.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              anchor="bottom"
            >
              <button
                onClick={() => setSelectedProperty(result)}
                className="cursor-pointer rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                {result.price}
              </button>
            </Marker>
          </div>
        ))}

        {selectedProperty && (
          <Popup
            longitude={selectedProperty.long}
            latitude={selectedProperty.lat}
            anchor="bottom"
            className="pb-6"
            closeButton={true}
            closeOnClick={false}
            onClose={() => setSelectedProperty(null)}
          >
            <div className="w-645">
              <img
                src={selectedProperty.img}
                alt={selectedProperty.title}
                className="h-32 w-55 rounded-lg object-cover"
              />

              <div className="mt-2">
                <h3 className="font-semibold">{selectedProperty.title}</h3>

                <p className="text-sm text-gray-500">
                  {selectedProperty.location}
                </p>

                <p className="mt-1 font-semibold">{selectedProperty.price}</p>

                <p className="text-sm">⭐ {selectedProperty.star}</p>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
