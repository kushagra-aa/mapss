"use client";
import useUserLocation from "@/hooks/useUserLocation";
import { Map } from "@react-ol/fiber";
import { LatLng } from "leaflet";
import "ol/ol.css";

export default function OpenMap() {
  const options = {
    center: [26.7231, 80.8396], // Replace with desired coordinates
    zoom: 2,
  };

  const { userLocationArray } = useUserLocation({
    defaultCoords: options.center as unknown as LatLng,
  });

  return (
    <div>
      {typeof window !== "undefined" ? (
        // Render components using react-openlayers
        <Map style={{ width: "100vw", height: "100vh" }}>
          <olView
            center={userLocationArray || options.center}
            zoom={options.zoom}
          />
          <olLayerTile>
            <olSourceOSM />
          </olLayerTile>
        </Map>
      ) : (
        <></>
      )}
    </div>
  );
}
