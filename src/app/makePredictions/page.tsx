"use client";

import { useState } from "react";
export default function MakePredictions() {
  const [modelName, setModelName] = useState("");
  const [predictionResult, setPredictionResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/getPrediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ model: modelName }),
      });

      const data = await response.json();
      if (response.ok) {
        setPredictionResult(data);
      } else {
        setPredictionResult("Error:" + data.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        setPredictionResult("Error: " + error.message);
      } else {
        setPredictionResult("An unknown error occurred");
      }
    }
  };
  return (
    <div>
      Predictions
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={modelName}
            onChange={handleInputChange}
            placeholder="Enter model name"
            required
          ></input>
        </label>
        <button type="submit">Make Prediction</button>
      </form>
      {predictionResult && (
        <div>
          <h3>Prediction Result:</h3>
          <pre>{JSON.stringify(predictionResult)}</pre>
        </div>
      )}
    </div>
  );
}
