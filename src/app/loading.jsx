import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {Array.from({ length: 15 }).map((_, index) => {
        return (
          <div key={index} className="p-5 border-2 animate-pulse">
            <div className="bg-gray-300 h-40 w-full mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        );
      })}
    </div>
  );
};

export default loading;
