import { useState } from "react";
import WhyUsToggle from "./WhyUsToggle";
import WhySummaryImg from "../assets/why-summary-img.png";
import WhyDetailedTable from "./WhyDetailedTable";

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div id="whyus">
      <h1 className="text-md md:text-2xl lg:text-3xl text-center text-white font-[600] ">
        What makes us different?
      </h1>
      <div className="space-y-6 flex flex-col items-center mt-10">
        <p className="text-[#FFFFFF40] text-md md:text-lg text-center max-w-lg font-400">
          Currently, at Nexbi we are making data analysis straightforward and
          accessible.{" "}
          <span className="text-white">
            Our goal is to help you navigate your data with ease,
          </span>{" "}
          so you can focus on what really matters—growing your business.
        </p>
        <p className="text-[#FFFFFF40] text-md md:text-lg text-center max-w-lg font-400">
          Our platform is designed to easily integrate with your existing
          systems, offering a cost-effective solution that's friendly to your
          budget. Unlike traditional BI tools, we focus on making sure you get
          the insights you need hassle–free.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-16 items-center">
        <WhyUsToggle activeTab={activeTab} setActiveTab={setActiveTab} />
        <div>
          {activeTab !== "Summary" ? (
            <WhyDetailedTable />
          ) : (
            <img
              alt="summary"
              src={WhySummaryImg}
              className="object-contain w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
