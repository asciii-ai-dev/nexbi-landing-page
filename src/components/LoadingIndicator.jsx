import React, { useState, useEffect } from "react";

const LoadingIndicator = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isLoading) {
      setProgress(0); // Reset progress when loading starts

      interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Increase progress gradually until 95%
          if (prevProgress < 95) {
            return prevProgress + Math.random() * 5; // Random increment for a natural feel
          }
          return prevProgress;
        });
      }, 300);
    } else {
      // When loading ends, set progress to 100% and clear interval
      setProgress(100);
      clearInterval(interval);

      // Reset progress after a short delay for next loading
      setTimeout(() => setProgress(0), 500);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-white text-lg md:text-2xl font-[600]">Gathering data and analyzing...</p>
      <div className="w-full max-w-md h-1 bg-[#78788029] rounded">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
