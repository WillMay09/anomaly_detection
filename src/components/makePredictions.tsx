"use client";

import { useEffect, useState } from "react";
export default function MakePredictions() {
  const [predictionResult, setPredictionResult] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/getPrediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ model: "logistic_regression_model.pkl" }),
        });

        const data = await response.json();
        if (response.ok) {
          setPredictionResult(data);
        } else {
          setPredictionResult("Error:" + data.error);
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage("Error: " + error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      }
    };
    handleSubmit();
  }, []);
  return (
    <div>
      <h3>Prediction Result:</h3>
      {predictionResult ? (
        <ul>
          {Object.entries(predictionResult).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
            </li>
          ))}
        </ul>
      ) : errorMessage ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : (
        <p>Loading prediction result...</p>
      )}
    </div>
  );
}
