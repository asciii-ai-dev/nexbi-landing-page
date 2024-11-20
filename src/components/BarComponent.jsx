import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const BarComponent = ({
  chartData,
  heading,
  ChartComponent,
  isCompetitors,
}) => {
  console.log({ isCompetitors });
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className=" rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95  bg-clip-padding"
      >
        <div className="h-full w-full space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] text-[#fff] font-[550] truncate">
              {heading}
            </h2>
            {heading === "Keywords Movement" ? (
              <div>
                <Tooltip anchorSelect=".kw_move" place="top-start">
                  Overall, keywords moved from the top page to the 10th page of
                  Google over a period of six months.
                </Tooltip>
                <AiOutlineQuestionCircle
                  className="kw_move cursor-pointer"
                  color="#fff"
                  size={20}
                />
              </div>
            ) : heading === "Keywords Ranking" ? (
              <div className="!z-50">
                {isCompetitors ? (
                  <>
                  <Tooltip
                    anchorSelect=".kw_ranking_compet"
                    className="!w-full md:!w-[350px]"
                    place="bottom-end"
                  >
                    A total number of ranked keywords of your business and
                    competition over the period of the last six months.
                  </Tooltip>
                  
                <AiOutlineQuestionCircle
                  className="kw_ranking_compet cursor-pointer"
                  color="#fff"
                  size={20}
                />
                  </>
                ) : (
                  <>
                  <Tooltip
                    anchorSelect=".kw_ranking"
                    className="!w-full md:!w-[350px]"
                    place="bottom-end"
                  >
                    The number of keywords ranking improved, declined, or
                    completely lost over the period of the last six months.
                  </Tooltip>
                  
                <AiOutlineQuestionCircle
                className="kw_ranking cursor-pointer"
                color="#fff"
                size={20}
              />
              </>
                )}
              </div>
            ) : heading === "Traffic" ? (
              <div>
                {
                  isCompetitors ? (
                    <>
                    <Tooltip anchorSelect=".traffic_imp_compet" place="bottom-end">
                    Your business and competitors’ website traffic for the last six months
                </Tooltip>
                <AiOutlineQuestionCircle
                  className="traffic_imp_compet cursor-pointer"
                  color="#fff"
                  size={20}
                />
                    </>
                  ) : (
                    <>
                    <Tooltip anchorSelect=".traffic_imp" place="bottom-end">
                  Your website’s overall traffic and impressions over a period
                  of six months.
                </Tooltip>
                <AiOutlineQuestionCircle
                  className="traffic_imp cursor-pointer"
                  color="#fff"
                  size={20}
                />
                    </>
                  )
                }
              </div>
            ) : null}
          </div>
          <ChartComponent chartData={chartData} isCompetitors={isCompetitors} />
        </div>
      </div>
    </div>
  );
};

export default BarComponent;
