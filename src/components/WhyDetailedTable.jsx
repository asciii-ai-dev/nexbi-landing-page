import React, { useState } from "react";
import { featuresData } from "../utils/features-data";

const WhyDetailedTable = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  return (
    <div className="overflow-x-auto  w-full max-w-[400px] sm:max-w-[550px] md:max-w-full  p-10">
      <table className="table-auto w-full relative border-collapse text-left text-white">
        <thead>
          <tr className="text-sm text-white border-b border-dashed border-neutral-700">
            <th className="py-4 pr-9">Features</th>
            <th
              className={`py-4 px-5 text-center relative ${
                hoveredColumn === "NexBI"
                  ? "bg-[#0B0D0ECC] text-white rounded-t-xl"
                  : "text-[#FFFFFF26]"
              }`}
              onMouseEnter={() => setHoveredColumn("NexBI")}
              onMouseLeave={() => setHoveredColumn(null)}
            >
              NexBI
            </th>
            <th
              className={`py-4 px-8 text-center relative ${
                hoveredColumn === "PowerBI"
                  ? "bg-[#0B0D0ECC] text-white rounded-t-xl"
                  : "text-[#FFFFFF26]"
              }`}
              onMouseEnter={() => setHoveredColumn("PowerBI")}
              onMouseLeave={() => setHoveredColumn(null)}
            >
              Power BI
            </th>
            <th
              className={`py-4 px-8 text-center relative ${
                hoveredColumn === "Qlik"
                  ? "bg-[#0B0D0ECC] text-white rounded-t-xl"
                  : "text-[#FFFFFF26]"
              }`}
              onMouseEnter={() => setHoveredColumn("Qlik")}
              onMouseLeave={() => setHoveredColumn(null)}
            >
              Qlik
            </th>
            <th
              className={`py-4 px-8 text-center relative ${
                hoveredColumn === "Supermetrics"
                  ? "bg-[#0B0D0ECC] text-white rounded-t-xl"
                  : "text-[#FFFFFF26]"
              }`}
              onMouseEnter={() => setHoveredColumn("Supermetrics")}
              onMouseLeave={() => setHoveredColumn(null)}
            >
              Supermetrics
            </th>
          </tr>
        </thead>
        <tbody>
          {featuresData.map((feature, index) => (
            <tr
              key={index}
              className={`text-sm ${
                featuresData.length - 1 !== index ? "border-b" : ""
              } border-dashed border-neutral-700`}
            >
              <td className="py-5 pr-9">{feature.name}</td>
              <td
                className={`py-5 px-6 text-center ${
                  hoveredColumn === "NexBI"
                    ? "bg-[#0B0D0ECC] cursor-pointer  text-white"
                    : "text-[#FFFFFF26]"
                }`}
                onMouseEnter={() => setHoveredColumn("NexBI")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {featuresData.length - 1 !== index ? (
                  feature.NexBI
                ) : (
                  <a href="#waitlist" style={{display: featuresData.length - 1 !== index  ? "block" : "hidden" }} className="bg-[#0080FF] text-white font-[400] text-xs rounded-xl px-4 py-2.5 hover:bg-[#006fd6] transition duration-300">
                    Join the waitlist
                  </a>
                )}
              </td>
              <td
                className={`py-5 px-8 text-center ${
                  hoveredColumn === "PowerBI"
                    ? "bg-[#0B0D0ECC] cursor-pointer text-white"
                    : "text-[#FFFFFF26]"
                }`}
                onMouseEnter={() => setHoveredColumn("PowerBI")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {feature.PowerBI}
              </td>
              <td
                className={`py-5 px-8 text-center ${
                  hoveredColumn === "Qlik"
                    ? "bg-[#0B0D0ECC] cursor-pointer text-white"
                    : "text-[#FFFFFF26]"
                }`}
                onMouseEnter={() => setHoveredColumn("Qlik")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {feature.Qlik}
              </td>
              <td
                className={`py-5 px-8 text-center ${
                  hoveredColumn === "Supermetrics"
                    ? "bg-[#0B0D0ECC] cursor-pointer text-white"
                    : "text-[#FFFFFF26]"
                }`}
                onMouseEnter={() => setHoveredColumn("Supermetrics")}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {feature.Supermetrics}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhyDetailedTable;
