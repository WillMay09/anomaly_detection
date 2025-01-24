"use client";

import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

interface ModelDropdownProps {
  models: string[];
}
export default function modelDropDown({ models }: ModelDropdownProps) {
  //store currently selected model
  const [selectedModel, setSelectedModel] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
    console.log("Selected Model:", event.target.value);
  };

  return (
    <div className = "bg-gray-800 rounded-lg shadow-lg p-8 max-w-md text-center  text-white">
      <label htmlFor="model-select">Select a model</label>
      <select id="model-select" className="ml-3 bg-indigo-500" value={selectedModel} onChange={handleChange}>
        <option value="" disabled>
          --Select a Model--
        </option>
        {/* index is the current position of the model in the array */}
        {models.map((model: string, index: number) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>
      {/* For now display what model is selected */}
      {selectedModel && (
        <Link href='/predictionStats'className="mt-3">
          You have selected <strong>{selectedModel}</strong>
        </Link>
      )}
    </div>
  );
}
