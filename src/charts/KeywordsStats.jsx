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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// ChartComponent
const KeywordsStats = ({ chartData }) => {
  // Early return if chartData is missing
  if (!chartData) return;

  // Dynamically get labels (metrics) from the first item in chartData
  const metricLabels = chartData[Object.keys(chartData)[0]] 
    ? Object.keys(chartData[Object.keys(chartData)[0]]) 
    : [];

  // Prepare data for the chart
  const sortedData = Object.keys(chartData)
    .reduce((acc, key) => {
      acc.labels.push(key);
      metricLabels.forEach((metric) => {
        acc[metric] = acc[metric] || [];
        acc[metric].push(chartData[key][metric]);
      });
      return acc;
    }, { labels: [], ...metricLabels.reduce((acc, label) => ({ ...acc, [label]: [] }), {}) });
    console.log({sortedData})
  // Configure dataset based on dynamic metric labels
  const data = {
    labels: sortedData.labels,
    datasets: metricLabels.map((label, index) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      data: sortedData[label],
      backgroundColor: index === 0 ? '#23B649' : index === 1 ? '#DF9B34' : '#088F8F',
    })),
  };

  const options = {
    responsive: true,
    barPercentage: 0.8,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        position: "right",
        border: { dash: [4, 4] },
        grid: {
          display: true,
          color: "gray",
        },
        ticks: {
          callback: function (value) {
            if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + "M"; // 1,000,000 -> 1M
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + "k"; // 1,000 -> 1k
            }
            return value; // Below 1000, keep the original value
          },
        },
      },
      // x: {
      //   barPercentage: 0.5,
      //   categoryPercentage: 0.5,
        
      // },
      x: {
        barPercentage: 0.5,
        categoryPercentage: 0.5,
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
    <div className='w-full h-[300px] md:w-full'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default KeywordsStats;
