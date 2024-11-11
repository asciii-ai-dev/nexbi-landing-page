import KeywordsStats from "../charts/KeywordsStats";
import BarComponent from "./BarComponent";
import KeywordsMovement from "../charts/KeywordsMovement";
import KeywordsTraffic from "../charts/KeywordsTraffic";
import TopPageCard from "./TopPageCard";
import TopRankedCard from "./TopRankedCard";
import ShowPageSelector from "./ShowPageSelector";
import { useState } from "react";
import BacklinksBarChart from "./BacklinksBarChart";


const StatisticsSection = ({data, selectors}) => {
  const [selectorType, setSelectorType] = useState(selectors[0] || "");
  const {trafficImpressionsData, keywordsRankingStatsData, keywordsMovementStatsData, trustPilotStats, topRankedKeywords, topPageKeywords, topPageTraffic, topMentions,backlinksData} = data;


  return (
    <section className="space-y-7">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-white text-center font-[600]">Key Statistics</h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
        <BarComponent isCompetitors={selectors.includes("Business")} heading={"Keywords Ranking"} chartData={keywordsRankingStatsData} ChartComponent={KeywordsStats} />
        <TopPageCard isCompetitors={selectors.includes("Business")} selectorType={selectorType} data={{topPageKeywords, topPageTraffic, topMentions: selectorType === "Business" ? topMentions?.business_mentions : topMentions?.competitors_mentions[0][selectorType] }} />
        </div>
        <div className="flex flex-col gap-4">
         <ShowPageSelector selectors={selectors} selectorType={selectorType} setSelectorType={setSelectorType} />
        {keywordsMovementStatsData && <BarComponent isCompetitors={selectors.includes("Business")}  heading={"Keywords Movement"} chartData={keywordsMovementStatsData} ChartComponent={KeywordsMovement} />}
        {backlinksData &&  <BacklinksBarChart data={backlinksData} />}
        </div>
        <div className="flex flex-col gap-4">
        {topRankedKeywords && <TopRankedCard topRankedKeywords={topRankedKeywords} />}
        <BarComponent isCompetitors={selectors.includes("Business")} heading={"Traffic & Impressions"} chartData={trafficImpressionsData} ChartComponent={KeywordsTraffic} />
        {trustPilotStats && <TopPageCard selectorType={selectorType} data={{trustPilotStats: selectorType === "Business" ? trustPilotStats?.business_rating : trustPilotStats?.competitors_rating[0][selectorType] }} />}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
