import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  Dubai: { lat: 25.348819, lng: 55.409649, name: "Oasis Mall, Dubai" },
  Sydney: { lat: -33.8790, lng: 151.2149, name: "49 Oxford Street, Sydney" },
  London: { lat: 51.5133, lng: -0.1313, name: "18 Old Compton St, London" },
  Tokyo: { lat: 35.664035, lng: 139.698212, name: "Shibuya, Tokyo" },
};

// Custom component to update the map's center dynamically
const ChangeCenter = ({ center }) => {
  const map = useMap();
  map.setView(center, 13); // Change map center dynamically
  return null;
};

const Section3 = () => {
  const [center, setCenter] = useState([locations.Dubai.lat, locations.Dubai.lng]);

  return (
    <section className=" map-section text-center">
        <h1 className="mh pb-5">Map</h1>
      <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeCenter center={center} />
        {Object.values(locations).map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="mt-4">
        {Object.keys(locations).map((location) => (
          <button key={location} onClick={() => setCenter([locations[location].lat, locations[location].lng])}>
            {location}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Section3;