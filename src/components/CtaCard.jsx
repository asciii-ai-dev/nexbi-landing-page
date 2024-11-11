import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CtaCard = () => {
  return (
    <div
      className="rounded-[32px] h-auto p-10 md:h-[220px] md:py-24 px-6 flex flex-col  justify-center items-center"
      style={{
        background:
          "linear-gradient(113.56deg, #00BAF8 2.03%, #333FFF 45.26%, #9933FF 98.1%)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-lg md:text-[22px] px-2 pt-5 text-center text-white  font-[700] mb-8">
          Find how your business is performing
        </h1>
        <div className="space-y-3 -mt-3">
          <a
            href="#hero"
            style={{
              boxShadow: "inset 0px 0px 12px 4px rgba(255, 255, 255, 0.7)",
            }}
            className="flex items-center gap-1 border border-blue-200 bg-[#2443F912] px-6 py-3 rounded-[24px] text-white"
          >
            <p className="text-[14px] font-[800]">Try it now</p>
            <FaArrowRight size={13} color="#fff" />
          </a>
          <p className="text-[14px] font-[500] text-white text-opacity-80 text-center">
            No signup required!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
