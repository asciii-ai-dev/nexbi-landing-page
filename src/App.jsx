import ActionableSteps from "./components/ActionableSteps";
import CardSection from "./components/CardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import StatisticsSection from "./components/StatisticsSection";
import BgSvg from "./assets/bg-svg.svg";
import CompetitorInsightsCard from "./components/CompetitorInsightsCard";
import CtaCardsSection from "./components/CtaCardsSection";
import ParagraphSection from "./components/ParagraphSection";
import CommunityCta from "./components/CommunityCta";
import HowItWorks from "./components/HowItWorks";
import { useState, useEffect } from "react";
import { businessData } from "./utils/business-data";
import {
  convertForLineChart,
  extractCompetitorNames,
  transformToKeywordsRankingStats,
} from "./utils/convertors";
import {
  postBusinessData,
  postCheckInsights,
  postCompetitorData,
  postWaitlist,
} from "./utils/api";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingIndicator from "./components/LoadingIndicator";
import Footer from "./components/Footer";
import { formatUrl } from "./utils/format-url";
import { hotjar } from 'react-hotjar'

function App() {
  const [businessResponse, setBusinessResponse] = useState();
  const [competitorsData, setCompetitorsData] = useState();
  const [isInsightsAvailable, setIsInsightsAvailable] = useState(true);
  const [domain, setDomain] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCompet, setIsLoadingCompet] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    competitors: [{ url: "" }, { url: "" }],
    contact_us: false,
    insights_exist: false,
  });
  const [waitlistForm, setWaitlistForm] = useState({ name: "", email: "" });

  useEffect(() => {
    hotjar.initialize({id: 5183256, sv:6})
  }, [])

  const handleChangeWaitlist = (e) => {
    const { name, value } = e.target;
    setWaitlistForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "contact_us") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name.includes("competitor")) {
      const [_, index, key] = name.split("_");
      setFormData((prevData) => {
        const competitors = [...prevData.competitors];
        competitors[index][key] = value;
        return { ...prevData, competitors };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const resp = await postCheckInsights({
      user_id: businessResponse?.user_id,
    });
    setIsInsightsAvailable(resp?.insights_available)
    if (resp?.insights_available) {
      setIsInsightsAvailable(resp?.insights_available)
      await getCompetitorsData();
      setIsLoading(false)
      return;
    } else {
      setIsInsightsAvailable(false);
      setIsLoading(false)
      return;
    }
  };

  const getBusinessData = async () => {
    setBusinessResponse();
    setCompetitorsData();
    try {
      setIsLoading(true);
      const response = await postBusinessData({
        domain: formatUrl(domain),
        stats_type: "business",
      });
      console.log(response, " response");
      setBusinessResponse(response);
      toast.success("Business Data Generated Successfully", {
        autoClose: "2000",
      });
    } catch (error) {
      console.error("Error fetching business data:", error);
      toast.error("Something Went Wrong! Try again", { autoClose: "2000" });
    } finally {
      setIsLoading(false);
      setIsInsightsAvailable(true)
    }
  };

  const getCompetitorsData = async () => {
    try {
      setIsLoadingCompet(true);
      const response = await postCompetitorData({
        user_id: businessResponse?.user_id,
        ...formData,
        insights_exist: isInsightsAvailable ,
        competitors: formData.competitors.reduce((acc, v) => {
          if (v.url !== "") {
            acc.push({
              website: v.url,
            });
          }
          return acc;
        }, []), // Start with an empty array and only add items that match
      });
      console.log(response, " response");
      setCompetitorsData(response);
      toast.success("Competitors Insights Generated Successfully", {
        autoClose: "2000",
      });
    } catch (error) {
      console.error("Error fetching competitors data:", error);
      toast.error("Something Went Wrong! Please check the URL", { autoClose: "2000" });
    } finally {
      setIsLoadingCompet(false);
    }
  };
  const submitWaitlist = async () => {
    try {
      setIsLoading(true);
      const response = await postWaitlist({
        ...waitlistForm,
      });
      console.log(response, " response");
      toast.success(
        "Thank you for joining the waitlist! We'll be in touch soon.",
        { autoClose: "2000" }
      );
    } catch (error) {
      console.error("Error fetching competitors data:", error);
      toast.error("Something Went Wrong! Try again", { autoClose: "2000" });
    } finally {
      setWaitlistForm({ name: "", email: "" });
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#060809] min-h-screen overflow-hidden">
      {/* Light effect */}
      <div className="absolute left-0 top-0 inset-0 pointer-events-none">
        {/* <div className="w-[40%] h-[399px] md:h-[80%] bg-gradient-to-bl from-[#ffffff] to-transparent opacity-[0.011] clip-torch" /> */}
        <img
          src={BgSvg}
          className="object-contain bg-no-repeat opacity-[0.03] h-full"
        />
      </div>

      <div className="relative w-full max-w-[66rem] mx-auto py-4 mb-20">
        <Header />
        <div className="mt-20 md:mt-32 space-y-6 px-5 w-[95%] sm:w-full mx-auto">
          <HeroSection
            getBusinessData={getBusinessData}
            domain={domain}
            setDomain={setDomain}
            isLoading={isLoading}
          />
          {isLoading ? <LoadingIndicator isLoading={isLoading} /> : null}
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)",
            }}
            className="flex justify-center mb-10 md:!mb-16 !mt-2 bg-blue-300 items-center relative w-full"
          ></div>
          {businessResponse || isLoading ? (
            <>
              <ReviewSection
                isLoading={isLoading}
                title={businessResponse?.business_insights?.title}
                summary={
                  businessResponse?.business_insights?.insights_data
                    ?.overall_summary
                }
              />
              <CardSection
                isLoading={isLoading}
                positives={
                  businessResponse?.business_insights?.insights_data?.positives
                }
                opportunities={
                 typeof businessResponse?.business_insights?.insights_data
                 ?.opportunities === "string" ? businessResponse?.business_insights?.insights_data
                    ?.opportunities : businessResponse?.business_insights?.insights_data
                    ?.opportunities?.opportunities
                }
              />
              <ActionableSteps
                isLoading={isLoading}
                actionableTasks={
                  businessData?.business_insights?.actionable_tasks
                }
              />
              {businessResponse && (
                <div className="!mt-20">
                  <StatisticsSection
                    isCompetitors={false}
                    selectors={["traffic", "keywords"]}
                    data={{
                      trafficImpressionsData:
                        businessResponse?.traffic_impressions,
                      keywordsRankingStatsData:
                        businessResponse?.keywords_ranking_stats,
                      keywordsMovementStatsData:
                        businessResponse?.keywords_movement_stats,
                      topRankedKeywords: businessResponse?.top_ranked_keywords,
                      topPageKeywords: businessResponse?.top_pages_by_keywords,
                      topPageTraffic: businessResponse?.top_pages_by_traffic,
                    }}
                  />
                </div>
              )}
            </>
          ) : null}

          {(businessResponse && competitorsData) || isLoadingCompet ? (
            <>
              <h1 className="text-lg md:text-2xl lg:text-3xl text-white text-center font-[600] !mt-10 my-5">
                Competitors Insights
              </h1>
              <ReviewSection
                title={competitorsData?.competitors_insights?.title}
                summary={
                  competitorsData?.competitors_insights?.insights_data
                    ?.overall_summary
                }
                isLoading={isLoadingCompet}
              />
              <CardSection
                positives={
                  competitorsData?.competitors_insights?.insights_data
                    ?.positives
                }
                opportunities={
                  competitorsData?.competitors_insights?.insights_data
                    ?.opportunities
                }
                isLoading={isLoadingCompet}
              />
              <ActionableSteps
                actionableTasks={
                  competitorsData?.competitors_insights?.actionable_tasks
                }
                isLoading={isLoadingCompet}
              />
              {competitorsData && (
                <div className="!mt-20">
                  <StatisticsSection
                    selectors={[
                      "Business",
                      ...extractCompetitorNames({
                        num_ranked_keywords:
                          competitorsData?.num_ranked_keywords,
                      }),
                    ]}
                    data={{
                      trafficImpressionsData: convertForLineChart({
                        traffic_stats: competitorsData?.traffic_stats,
                      }),
                      keywordsRankingStatsData: transformToKeywordsRankingStats(
                        {
                          num_ranked_keywords:
                            competitorsData?.num_ranked_keywords,
                        }
                      ),
                      topMentions: competitorsData?.top_mentions,
                      backlinksData: {
                        total_backlinks: competitorsData?.total_backlinks,
                      },
                      trustPilotStats: competitorsData?.trustpilot_stats,
                    }}
                  />
                </div>
              )}
            </>
          ) : businessResponse ? (
            <CompetitorInsightsCard
              handleChange={handleChange}
              handleSubmit={!isInsightsAvailable ? getCompetitorsData : handleSubmit}
              formData={formData}
              isLoading={isLoading}
              isInsightsAvailable={isInsightsAvailable}
            />
          ) : null}
          {/* <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)",
            }}
            className="absolute bottom-0 left-0 w-full !bg-red-400"
          />
          <div
            id="video"
            className="w-full !mt-14 h-[250px] sm:h-[380px] md:h-[549px]"
          >
            <iframe
              width="100%"
              height={"100%"}
              src="https://www.youtube.com/embed/N45UC2WCwpk?si=YR79KtgPkyZK1nDE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div> */}

          <div className="flex justify-center items-center !my-10 md:!my-20 ">
            <ParagraphSection />
          </div>
          <div className="!my-20">
            <CtaCardsSection businessResponse={businessResponse} />
          </div>
          <HowItWorks />
        </div>
      </div>
      <CommunityCta
        submitWaitlist={submitWaitlist}
        waitlistForm={waitlistForm}
        handleChangeWaitlist={handleChangeWaitlist}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
