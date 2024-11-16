import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = ({domain, setDomain, isLoading, getBusinessData}) => {
    const boxShadow = `-4px 1px 13px -5px #F43E64, 
                2px 1px 13px -4px #DF51DB, 
                -3px -1px 14px -4px #0091FA`
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-12 text-white">
      <h1 className="hero_heading py-4 text-3xl md:text-4xl lg:text-6xl font-bold mb-6 max-w-[49rem]">
        Turn your data into insights and opportunities
      </h1>
      <div
        style={{
          background:
            "linear-gradient(90.56deg, #17191C 16.91%, #101114 80.69%)",
          boxShadow: isLoading ? boxShadow : ""

        }}
        className="flex w-full max-w-2xl rounded-full pl-1 pr-2 py-1.5 sm:mt-5"
      >
        <input
          type="url"
          placeholder="https://www.example.com"
          className="flex-grow bg-transparent text-white px-4 outline-none"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button disabled={isLoading} onClick={getBusinessData} style={{boxShadow:"0px 0px 8px 0.5px #172BA1 inset"}} className="border border-[#DDDFEE1A] bg-[#2443F912] px-4 py-3.5 rounded-full text-white disabled:cursor-not-allowed">
          {
            isLoading ? (
              <div className="animate-spin">
              <AiOutlineLoading3Quarters size={18} color="#fff"  />
              </div>
            ) : (
              <FaArrowRight size={16} color="#fff" />
            )
          }
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
