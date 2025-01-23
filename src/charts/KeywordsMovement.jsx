import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { months } from '../utils/charts-data';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// BarChartComponent
const KeywordsMovement = ({ chartData }) => {
  // Prepare data for the chart
  if(!chartData) return;
  const sortedData = Object?.keys(chartData)
    .reduce((acc, key) => {
      acc.labels.push(key);
      acc.firstPage.push(chartData[key]["num_keywords_ranking_on_first_page"] || 0);
      acc.secondThirdPage.push(chartData[key]["num_keywords_ranking_on_second_and_third_page"] || 0);
      acc.fourthTenthPage.push(chartData[key]["num_keywords_ranking_on_fourth_till_10_page"] || 0);
      return acc;
    }, { labels: [], firstPage: [], secondThirdPage: [], fourthTenthPage: [] });

  const data = {
    labels: sortedData.labels,
    datasets: [
      {
        label: '1st page',
        data: sortedData.firstPage,
        backgroundColor: '#23B649', 
      },
      {
        label: '2nd - 3rd page',
        data: sortedData.secondThirdPage,
        backgroundColor: '#DF9B34',
      },
      {
        label: '4th - 10th page',
        data: sortedData.fourthTenthPage,
        backgroundColor: '#DC3948',
      },
    ],
  };

  const options = {
    responsive: true,
    barPercentage: 0.8,
    plugins: {
      legend: {
        align: "start",
        labels: {
          usePointStyle: true, // This makes the legend icon a circle
          pointStyle: 'circle', // Specify circle point style explicitly
        },
      },
    },
   
    maintainAspectRatio: false, // Allows for height and width adjustment
    scales: {
        y: {
          beginAtZero: true,
          position:"right",
          border:{dash: [4, 4]},
          grid:{
            display:true,
            color:"gray",
          }
        },
        x: {
          barPercentage: 0.5, // Controls the width of the bars (0.5 = 50% width of the category)
          categoryPercentage: 0.5, // Controls the width of the category that bars take up (0.5 = 50% of the total category width)
          ticks: {
            callback: function (value, index, values) {
              // Map the numeric value to the corresponding label in data.labels
              const dateLabel = this.getLabelForValue(value); // This fetches the date string (MM-YYYY)
              console.log("Date Label:", dateLabel); // Log the date label to see the raw value
        
              // Split the label into month and year
              const [month, year] = dateLabel.split("-");
              console.log("Month-Year split:", month, year); // Check the split result
              const monthNumber = parseInt(month); 
              
              // Extract and return the short month name (e.g., "Jan", "Feb")
              return  months[monthNumber - 1];
            },
          },
        },
      },
  };

  return (
    <div className='w-full h-[300px] md:h-[345px]'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default KeywordsMovement;
