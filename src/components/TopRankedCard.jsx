import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const TopRankedCard = ({ topRankedKeywords }) => {
  const data = [
    { keyword: "patchstack", competition: "low", volume: 320 },
    { keyword: "patchstack", competition: "low", volume: 320 },
    { keyword: "patchstack", competition: "med", volume: 320 },
    { keyword: "patchstack", competition: "high", volume: 320 },
    { keyword: "patchstack", competition: "med", volume: 320 },
  ];
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className=" rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95  bg-clip-padding"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] text-[#fff] font-[550] truncate">
            Top Ranked Keywords
          </h2>
          <div>
          <Tooltip anchorSelect=".top_ranked_kw" place="top-start">
          Top website pages containing keywords that are ranking on the 1st page of Google.
          </Tooltip>
          <AiOutlineQuestionCircle className="top_ranked_kw cursor-pointer" color="#fff" size={20} />
          </div>
          
        </div>
        <div className="mt-5 px-2 overflow-y-auto scrollbar-hide hover:scrollbar-default max-h-[240px]">
          <div className="grid grid-cols-3 text-gray-400 uppercase text-xs font-semibold mb-2">
            <span>Keyword</span>
            <span className="text-center">Competition</span>
            <span className="text-right">Volume</span>
          </div>
          {topRankedKeywords &&
            topRankedKeywords.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 text-white py-2 border-b border-[#161618B2] text-sm`}
              >
                <a
                  href={`${item?.url || "#"}`}
                  target="_blank"
                  className="truncate"
                  title={item?.keyword}
                >
                  {item?.keyword}
                </a>
                {item?.competition_level === "LOW" ? (
                  <button className="ml-4 w-[60px] py-1 bg-[#75FF9A14] rounded-lg justify-center items-center">
                    <p className="font-bold uppercase text-[10px] text-[#55F69D]">
                      {item.competition_level}
                    </p>
                  </button>
                ) : item.competition_level === "HIGH" ? (
                  <button className="ml-4 w-[60px] py-1 bg-[#FF66A61A] rounded-lg justify-center items-center">
                    <p className="font-bold uppercase text-[10px] text-[#F24A5B]">
                      {item.competition_level}
                    </p>
                  </button>
                ) : (
                  <button className="ml-4 w-[60px] py-1 bg-[#FFE9991A] rounded-lg justify-center items-center">
                    <p className="font-bold uppercase text-[10px] text-[#FCD136]">
                      {item.competition_level}
                    </p>
                  </button>
                )}
                <span className="text-right">
                  {item?.keyword_search_volume}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopRankedCard;
