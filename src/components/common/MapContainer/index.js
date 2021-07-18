import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from "./mapStyles";

const MapContainer = () => {
  const containerStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 55.60393145962081,
    lng: 13.004479193024638,
  };

  const options = {
    styles: mapStyles,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBke-6QURgxIF5MRerrFDP26oCtwBIIBFQ">
      <GoogleMap
        mapContainerStyle={containerStyles}
        zoom={16}
        center={defaultCenter}
        options={options}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
