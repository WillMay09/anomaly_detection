import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to Market Anomaly
        </h1>
        <button className="mt-6 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          View Models
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
