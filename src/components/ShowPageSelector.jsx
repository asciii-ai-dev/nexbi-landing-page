const ShowPageSelector = ({ selectorType, setSelectorType, selectors }) => {
  console.log(selectorType, " SELECTOR")
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className=" rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95  bg-clip-padding"
      >
        <h2 className="text-[18px] text-[#fff] font-[550] truncate">
          Show page ranking by
        </h2>
        <div className="mt-5 space-y-4">
          {
            selectors && selectors.map((v,i) => (
              <button
              key={i}
            onClick={() => setSelectorType(v)}
            className={`space-y-1 pl-3 py-3 rounded-xl w-full text-left ${
              selectorType === v ? "bg-[#FFFFFF0F]" : ""
            } `}
          >
            <h4 className="text-[#FFFF] font-[500] capitalize text-md">{v}</h4>
            <p className="text-[#eeececbf] font-[400] text-sm">
              {
                v?.toLowerCase() ===  "traffic" ?  "Show top pages by traffic." : 
                v?.toLowerCase() === "keywords" ? "Show top pages by keywords." :
                v?.toLowerCase() === "business" ? "Visualize different stats about your business" :
                "Visualize different stats about your competitor"
            }
            </p>
          </button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ShowPageSelector;
