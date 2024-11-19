import { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import AiAgentImg from "../assets/ai_agent_img.svg"
// import SetGoalsImg from "../assets/set_goals_img.svg"
import IntegrateBusinessImg from "../assets/integrate_business_img.svg"
import AskImg from "../assets/ask_img.svg"
import IdentifyOpporImg from "../assets/identify_oppor_img.svg"

const steps = [
  {
    title: "Integrate your business data",
    description:
      "Power up the business intelligence engine by connecting all your data sources seamlessly with a click.",
    img: IntegrateBusinessImg
    },
  { title: "Set your goals", description: "Define what you want to achieve.", img: AskImg },
  {
    title: "We identify opportunities for you",
    description: "Our AI finds growth opportunities.",
    img: IdentifyOpporImg
  },
  {
    title: "AI agents carry out the tasks",
    description: "Automated execution of tasks.",
    img: AiAgentImg
  },
  { title: "Ask whatever you want!", description: "Get insights on-demand.", img: AskImg },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoModal, setVideoModal] = useState(false);

  useEffect(() => {
    const intervalDuration = 8000; // 5 seconds total for each step
    const updateInterval = 50; // Update progress every 50ms for smoothness
    const increment = (100 * updateInterval) / intervalDuration; // Calculate progress increment per update

    // Reset progress when the current step changes
    setProgress(0);

    // Interval for incrementing the progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + increment >= 100) {
          clearInterval(progressInterval); // Stop updating once progress reaches 100%
          setCurrentStep((prevStep) => (prevStep + 1) % steps.length); // Move to the next step
          return 100; // Ensure progress ends at exactly 100%
        }
        return prevProgress + increment; // Otherwise, increment progress
      });
    }, updateInterval);

    return () => clearInterval(progressInterval); // Clear interval on cleanup
  }, [currentStep]);

  const handleClickStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <>
      <div id="how_it_works" className="space-y-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-md md:text-2xl lg:text-3xl text-center text-white font-[600] ">
            How It Works
          </h1>
          {/* <button
            onClick={() => setVideoModal(true)}
            className="flex gap-2 items-center shadow-md border border-[#FFFFFF14] w-fit rounded-full px-4 py-2"
          >
            <IoPlayOutline color="#f1f1f1" size={17} />
            <p className="text-[14px] text-[#f1f1f1] font-[500]">Watch Video</p>
          </button> */}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start bg-[#060809] text-white">
          {/* Left Side: Steps */}
          <div className="w-full md:w-1/2 p-6">
            {steps.map((step, index) => (
              <div
                onClick={() => handleClickStep(index)}
                key={index}
                className="mb-10 cursor-pointer"
              >
                    <h3
                  className={`text-lg text-[22px] duration-200 transition-all ${
                    index === currentStep
                      ? "text-white text-[20px]"
                      : "text-white text-opacity-10"
                  }`}
                >
                  {step.title}
                </h3>
                
                {index === currentStep && (
                  <p className="text-xs mt-3 text-white text-opacity-40">
                    {step.description}
                  </p>
                )}
                {/* Progress Bar */}
                <div
                  className="relative mt-4 h-[0.8px] w-full rounded-full "
                  style={{
                    background:
                      "linear-gradient(180deg, #141415 0%, #1D1F20 100%)",
                  }}
                >
                  <div
                    className="absolute h-[0.8px] rounded-full bg-green-500 transition-all duration-[50ms]"
                    style={{
                      width: index === currentStep ? `${progress}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Icons */ }
          <div className="flex-1 flex justify-center items-center">
            <img
              alt="steps_illustration"
              src={steps[currentStep]?.img}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <CustomModal onClose={() => setVideoModal(false)} open={videoModal}>
        <div className="h-[300px]">
          <iframe
            className="!mt-10"
            width="100%"
            height={"100%"}
            src="https://www.youtube.com/embed/N45UC2WCwpk?si=YR79KtgPkyZK1nDE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </CustomModal>
    </>
  );
};

export default HowItWorks;
