import React from "react";
import { useLocation } from "react-router-dom";

function WeatherData() {
  const { state } = useLocation();
  const { data } = state;
  return (
    <div className="Data-waether">
      <div>{data.name}</div>
      <div>{data.main.temp}</div>
    </div>
  );
}

export default WeatherData;
