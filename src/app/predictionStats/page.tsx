"use client";
import { useEffect, useState } from "react";
import RegressionHistogram from "@/components/regressionHistogram";
import RegressionHeatMap from "@/components/regressionHeatMap";
import MakePredictions from "@/components/makePredictions";
export default function PredictionStats() {
  const [heatMap, setHeatMap] = useState("");
  const [histogram, setHistogram] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const modelStats = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/getModelStats", {
          method: "GET",
        });

        const data = await response.json();
        if (response.ok) {
          setHeatMap(`data:image/png;base64,${data.heatMap}`);
          setHistogram(`data:image/png;base64,${data.histogram}`);
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
    modelStats();
  }, []);
  return (
    <div>
      <h1>Regression Model Stats</h1>
      {heatMap && histogram ? (
        <>
          <RegressionHeatMap heatMapProp={heatMap} />
          <MakePredictions />
          <RegressionHistogram histogramProp={histogram} />
          
        </>
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}
