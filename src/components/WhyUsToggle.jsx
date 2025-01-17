import React from "react";

const WhyUsToggle = ({activeTab, setActiveTab}) => {

  return (
    <div className="flex items-center px-1 py-1.5 bg-[#FFFFFF0D] rounded-full w-fit shadow-inner">
      <button
        onClick={() => setActiveTab("Summary")}
        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
          activeTab === "Summary"
            ? " text-[#FFFFFFCC] shadow-md border border-[#FFFFFF1A]"
            : "text-neutral-400"
        }`}
        style={{
            background: activeTab === "Summary" ? "linear-gradient(0deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)" : "transparent"
        }}
      >
        Summary
      </button>
      <button
        onClick={() => setActiveTab("Detailed Breakdown")}
        className={`px-4 py-2 text-sm rounded-full transition-all duration-300  ${
          activeTab === "Detailed Breakdown"
            ? " text-[#FFFFFFCC] shadow-md border border-[#FFFFFF1A]"
            : "text-neutral-400"
        }`}
        style={{
            background: activeTab === "Detailed Breakdown" ? "linear-gradient(0deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)" : "transparent"
        }}
      >
        Detailed Breakdown
      </button>
    </div>
  );
};

export default WhyUsToggle;
