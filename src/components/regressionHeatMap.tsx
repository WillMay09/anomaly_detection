"use client";

interface RegressionHeatMap{

  heatMapProp: string;
}

import { useState,useEffect } from "react";
export default function RegressionHeatMap({heatMapProp}:RegressionHeatMap){
  const [heatMap, setHeatMap] = useState<string>("");
  
   // Update heatMap when heatMapProp changes
   useEffect(() => {
    setHeatMap(heatMapProp);
  }, [heatMapProp]);

  return (
    <div>
      <h1>Correlation Heatmap</h1>
      {heatMap ? (
        <img src={heatMap} alt="Correlation Heatmap" />
      ):(
        <p>No heatmap found</p>
      )}
    </div>
  );
};
