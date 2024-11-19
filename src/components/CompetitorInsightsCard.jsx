import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import CardBg from "../assets/competitor_card_bg.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CompetitorInsightsCard = ({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
  isInsightsAvailable,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${CardBg})` }}
      className="flex bg-cover items-center justify-center w-full !my-10 "
    >
      <div className="relative py-6 px-8 card_wrapper rounded-[28px] max-w-md text-center text-white shadow-lg overflow-hidden">
        <h4 style={{fontFamily:"Manrope"}} className="hero_heading py-4 text-4xl text-center !font-extrabold">
          Unlock Deep Competitor Insights
        </h4>
        <p className="text-[15px] font-[400] opacity-75 text-[#FFFFFFBF] mb-7 mt-4 ">
          Analyze what your competitor is doing to rank higher. We'll identify
          the resources they’re using and provide details on how you can also
          appear there.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email (preferably business email)"
            className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
          />
          {!isInsightsAvailable && (
            <>
              <input
                type="url"
                name="competitor_0_url"
                value={formData.competitors[0].url}
                onChange={handleChange}
                placeholder="Competitor URL"
                className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
              />
              <input
                type="url"
                name="competitor_1_url"
                value={formData.competitors[1].url}
                onChange={handleChange}
                placeholder="Competitor URL (optional)"
                className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
              />
            </>
          )}
          <label className="flex text-left my-2 text-sm opacity-75 text-[#fff]">
            <input
              type="checkbox"
              name="contact_us"
              checked={formData.contact_us}
              onChange={handleChange}
              className="mr-2 mt-1 h-4 w-4 text-blue-500 bg-transparent cursor-pointer rounded focus:ring-0"
            />
            I want to join the waitlist and get exclusive beta access to the
            full product.
          </label>
          <button
            disabled={isLoading}
            type="submit"
            className="flex disabled:opacity-45 items-center disabled:cursor-not-allowed justify-center text-sm gap-3 w-full py-3.5 !mt-6 text-center font-semibold text-white bg-[#0773ED] rounded-full hover:bg-blue-700 focus:outline-none"
          >
            <p>See Competitor Insights</p>
            {isLoading ? (
              <div className="animate-spin mt-1">
                <AiOutlineLoading3Quarters size={18} color="#fff" />
              </div>
            ) : (
              <FiArrowRight size={16} color="#fff" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompetitorInsightsCard;
