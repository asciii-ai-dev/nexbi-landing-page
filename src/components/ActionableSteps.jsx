import Skeleton from "react-loading-skeleton";
import KeywordsIcon from "../assets/keywords_icon.svg"
import OnlinePresenceIcon from "../assets/onlinepresence_icon.svg"
import BacklinksIcon from "../assets/backlink_icon.svg"
import OnpageSeoIcon from "../assets/onpageseo_icon.svg"
import CollabIcon from "../assets/collaboration_icon.svg"
import OthersIcon from "../assets/others_icon.svg"


const ActionableSteps = ({ actionableTasks, isLoading }) => {
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className="rounded-[36px] h-full !bg-[#060809] p-6 border-2 border-transparent opacity-95  bg-clip-padding"
      >
        <div className="flex justify-between items-center gap-5">
          <h3 className="text-[22px] font-[600] text-white">
            Actionable Steps
          </h3>
        </div>
        <div className="flex justify-center items-center  pt-10">
          {isLoading ? (
            <div className="flex flex-col w-full md:flex-row gap-6 justify-start items-center max-w-full hover:scrollbar-default scrollbar-hide overflow-x-auto">
              {[0, 1, 2].map((v, i) => (
                <div className="max-w-full md:w-[300px] flex-shrink-0" key={i}>
                  <div className="bg-[#FFFFFF0D] mb-2 w-[57px] h-[55px] flex items-center justify-center rounded-xl">
                  <Skeleton
                      className="w-[25px] h-[25px] bg-red-400 !rounded-full opacity-25"
                      style={{
                        background:
                          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                      }}
                    />
                  </div>
                  <p className="text-md md:text-lg text-white font-[500] mb-1">
                    <Skeleton
                      className="max-w-[150px] !rounded-full mb-2 opacity-25"
                      style={{
                        background:
                          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                      }}
                    />
                  </p>
                  <p className="text-[14px] opacity-75 text-[#FFFFFFBF] font-[400] pb-3">
                    <Skeleton
                      className="max-w-md !rounded-full mb-2 opacity-25"
                      count={3}
                      style={{
                        background:
                          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                      }}
                    />
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-row gap-6 justify-start items-center max-w-full hover:scrollbar-default scrollbar-hide overflow-x-auto">
              {actionableTasks &&
                actionableTasks.map((v, i) => (
                  <div className="max-w-[280px] flex-shrink-0" key={i}>
                    <div className="bg-[#FFFFFF0D] mb-2 w-[57px] h-[55px] flex items-center justify-center rounded-xl">
                      {/* <FiLink color={"#FFFFFFBF"} size={28} /> */}
                      <img 
                        src={
                          v?.category === "keywords" ? KeywordsIcon :
                          v?.category === "online-presence" ? OnlinePresenceIcon :
                          v?.category === "backlinks" ? BacklinksIcon :
                          v?.category === "on-page-seo" ? OnpageSeoIcon :
                          v?.category === "collaboration" ? CollabIcon :
                          OthersIcon
                        } 
                        className="object-contain" 
                      />
                    </div>
                    <p className="text-md md:text-lg text-white font-[500] mb-1">
                      {v?.title || ""}
                    </p>
                    <p className="text-[14px] opacity-75 text-[#FFFFFFBF] font-[400] pb-3">
                      {v?.descp || ""}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionableSteps;
