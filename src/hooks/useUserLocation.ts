import L from "leaflet";
import { useEffect, useState } from "react";

export default function useUserLocation({
  defaultCoords,
}: {
  defaultCoords: L.LatLng;
}) {
  const [userLocation, setUserLocation] = useState<L.LatLng>(defaultCoords);

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      const userLatLng = new L.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      setUserLocation(userLatLng); // Update state
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, []);

  return {
    userLocation,
    userLocationArray: [userLocation.lat, userLocation.lng],
  };
}
