"use client";

import { useState, useEffect } from "react";
export const RegressionHeatMap = () => {
  const [heatMap, setHeatMap] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchHeatMap = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/getRegressionHeatMap",
          {
            method: "GET",
          }
        );

        const data = await response.json();
        if (response.ok) {
          setHeatMap(`data:image/png;base64,${data.heatMap}`);
        } else {
          setErrorMessage("Error:" + data.error);
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage("Error: " + error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      }
    };
    fetchHeatMap();
  }, []);

  return (
    <div>
      <h1>Correlation Heatmap</h1>
      {heatMap ? (
        <img src={heatMap} alt="Correlation Heatmap" />
      ):(
        <p>{errorMessage}</p>
      )}
    </div>
  );
};
