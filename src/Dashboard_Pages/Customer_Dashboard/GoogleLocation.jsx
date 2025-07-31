import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GoogleLocation = ({ myPercelData }) => {
  const currentLocation = myPercelData?.currentLocation;

  if (!currentLocation) {
    return <p className="text-center text-red-500">Location not found </p>;
  }

  const latitude = currentLocation.latitude;
  const longitude = currentLocation.longitude;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            Delevery Location <br /> Lat: {latitude}, Lng: {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleLocation;
