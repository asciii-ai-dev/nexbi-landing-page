
export const convertForLineChart = (data) => {
    const result = {};
  
    // Process Business stats
    data.traffic_stats.business_stats.forEach((item) => {
      const [date, traffic] = Object.entries(item)[0];
      if (!result[date]) result[date] = {};
      result[date].business = traffic;
    });
  
    // Process Competitors stats
    data.traffic_stats.competitors.forEach((competitorObj) => {
      for (const [competitorName, stats] of Object.entries(competitorObj)) {
        stats.forEach((item) => {
          const [date, impressions] = Object.entries(item)[0];
          if (!result[date]) result[date] = {};
          result[date][competitorName] = impressions;
        });
      }
    });
  
    return result;
  };
  

  export const transformToKeywordsRankingStats = (data) => {
    const result = {};
    data.num_ranked_keywords.business_stats.forEach((item) => {
        const [date, traffic] = Object.entries(item)[0];
        if (!result[date]) result[date] = {};
        result[date].business = traffic;
      });
    // Process Competitors stats
    data.num_ranked_keywords.competitors.forEach((competitorObj) => {
        for (const [competitorName, stats] of Object.entries(competitorObj)) {
          stats.forEach((item) => {
            const [date, impressions] = Object.entries(item)[0];
            if (!result[date]) result[date] = {};
            result[date][competitorName] = impressions;
          });
        }
      });
    
      return result;
  }

  export const extractCompetitorNames = (data) => {
    const competitorNames = new Set();
  
    // Iterate over each competitor data to extract names
    data.num_ranked_keywords.competitors.forEach((competitorData) => {
      Object.keys(competitorData).forEach((competitorName) => {
        competitorNames.add(competitorName); // Add the competitor name to the Set
      });
    });
  
    return Array.from(competitorNames); // Convert the Set to an array
  };