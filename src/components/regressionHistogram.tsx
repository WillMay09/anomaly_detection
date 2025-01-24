"use client";
interface histogramProp {
  histogramProp: string;
}
import { useState, useEffect } from "react";
export default function RegressionHistogram({ histogramProp }: histogramProp) {
  const [histogram, setHistogram] = useState<string>("");

   useEffect(() => {
      setHistogram(histogramProp);
    }, [histogramProp]);
  return (
    <div>
      <h1>Regression Histogram</h1>
      {histogram ? (
        <img src={histogram} alt="histogram of relevant stock data" />
      ) : (
        <p>No histogram found</p>
      )}
    </div>
  );
}
