import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="border-t-4 border-yellow-500 border-solid rounded-full animate-spin h-20 w-20"></div>
    </div>
  );
};

export default LoadingSpinner;