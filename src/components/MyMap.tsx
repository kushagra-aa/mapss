"use client";
import { Map } from "@react-ol/fiber";

const MyMap = () => {
  const options = {
    center: [0, 0], // Replace with desired coordinates
    zoom: 2,
  };

  return (
    <div>
      {typeof window !== "undefined" ? (
        // Render components using react-openlayers
        <Map style={{ width: "100vw", height: "100vh" }}>
          <olView center={options.center} zoom={options.zoom} />
          <olLayerTile>
            <olSourceOSM />
          </olLayerTile>
        </Map>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyMap;
