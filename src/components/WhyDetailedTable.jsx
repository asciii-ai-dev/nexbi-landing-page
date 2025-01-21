import React from "react";
import { featuresData } from "../utils/features-data";

const WhyDetailedTable = () => {

  return (
    <div className="overflow-x-auto  w-full max-w-[400px] sm:max-w-[550px] md:max-w-full  p-10">
      <table className="table-auto w-full relative border-collapse text-left text-white">
        <thead>
          <tr className="text-sm  border-b border-dashed border-neutral-700">
            <th className="py-4 pr-9 text-white">Features</th>
            <th
              className={`py-4 px-5 text-center relative bg-[#0B0D0ECC] text-white rounded-t-xl`}
            >
              NexBI
            </th>
            <th
              className={`py-4 px-8 text-center relative text-[#FFFFFF26]`}
            >
              Power BI
            </th>
            <th
              className={`py-4 px-8 text-center relative text-[#FFFFFF26]`}
            >
              Qlik
            </th>
            <th
              className={`py-4 px-8 text-center relative text-[#FFFFFF26]`}
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
                className={`py-5 px-6 text-center bg-[#0B0D0ECC] cursor-pointer  text-white`}
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
                className={`py-5 px-8 text-center  text-[#FFFFFF26]`}
              >
                {feature.PowerBI}
              </td>
              <td
                className={`py-5 px-8 text-center  text-[#FFFFFF26]`}
              >
                {feature.Qlik}
              </td>
              <td
                className={`py-5 px-8 text-center text-[#FFFFFF26]`}
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
