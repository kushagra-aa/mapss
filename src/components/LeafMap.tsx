"use client";
import { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";
import useUserLocation from "@/hooks/useUserLocation";

interface MapProps {
  center?: L.LatLng;
  zoom?: number;
}

const polyLineCoords = [
  [
    [26.7, 80.85],
    [26.7, 80.86],
    [26.72, 80.86],
  ],
];

const rectangleCoords = [
  [26.69, 80.88],
  [26.7, 80.86],
];

const fillBlueOptions = { fillColor: "blue" };
const blackOptions = { color: "black" };
const limeOptions = { color: "lime" };
const redOptions = { color: "red" };

export default function LeafMap({
  center = L.latLng(26.7231, 80.8396),
}: MapProps) {
  const mapRef = useRef<L.Map>(null!);
  const { userLocation } = useUserLocation({ defaultCoords: center });

  return (
    <div>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
        ref={mapRef}
        dragging
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={rectangleCoords[1] as unknown as L.LatLngExpression}
          pathOptions={fillBlueOptions}
          radius={200}
        />
        <CircleMarker center={center} pathOptions={redOptions} radius={50}>
          <Popup>Developer Location</Popup>
        </CircleMarker>
        <CircleMarker
          center={userLocation}
          pathOptions={limeOptions}
          radius={20}
        >
          <Popup>Your Location</Popup>
        </CircleMarker>
        <Polyline
          pathOptions={limeOptions}
          positions={polyLineCoords as unknown as L.LatLngExpression[]}
        />
        <Rectangle
          bounds={rectangleCoords as unknown as L.LatLngBoundsExpression}
          pathOptions={blackOptions}
        />
      </MapContainer>
    </div>
  );
}
