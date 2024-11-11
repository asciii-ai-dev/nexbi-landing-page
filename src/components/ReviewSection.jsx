import Skeleton from "react-loading-skeleton";

const ReviewSection = ({ title, summary, isLoading }) => {
  return (
    <section className="text-center">
      <div className="p-[0px] backdrop-blur-[200px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-r from-[#5CC3FF] via-[#9F31FF] to-[#FF5CD1]">
        <div className="relative rounded-[36px] p-6 md:px-12 md:py-8 border-[1px] border-transparent bg-clip-padding overflow-hidden">
          {/* Background layer */}
          <div
            className="absolute inset-0 rounded-[36px] opacity-70"
            style={{
              background:
                "linear-gradient(90.29deg, #0E0F11 11.9%, #0B0C0E 86.39%)",
              zIndex: -1,
            }}
          ></div>

          {/* Text content */}
          <h3 className="text-[22px] font-[600] text-white mb-4">
            {isLoading ? (
              <Skeleton
                className="max-w-md !rounded-full py-1.5 opacity-25"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                }}
              />
            ) : (
              title || ""
            )}
          </h3>
          <p className="text-[15px] mx-10 text-[#fff] font-light">
            {isLoading ? (
              <Skeleton 
              className="max-w-lg !rounded-full mb-2 opacity-25" 
              count={2} 
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
              }}
              />
            ) : (
              summary || ""
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
