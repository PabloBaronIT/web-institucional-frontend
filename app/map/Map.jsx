import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ client }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }, [client]);

  return (
    <div
      className="map-container"
      ref={mapContainer}
      style={{ height: "400px" }}
    />
  );
}
