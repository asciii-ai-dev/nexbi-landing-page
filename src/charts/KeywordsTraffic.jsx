import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { months } from '../utils/charts-data';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// LineChartComponent
const KeywordsTraffic = ({ chartData }) => {
  if (!chartData) return null;
  const colors = [ "#1B76DE","#DE971B","#CD3749"]

  // Get keys for dynamic labels
  const firstKey = Object.keys(chartData)[0];
  const dataKeys = chartData[firstKey] ? Object.keys(chartData[firstKey]) : [];

  // Prepare data for the chart
  const sortedData = Object.keys(chartData).reduce(
    (acc, dateKey) => {
      const dataObj = chartData[dateKey];
      
      // Ensure the date object contains all required keys
      if (dataKeys.every(key => key in dataObj)) {
        acc.labels.push(dateKey);
        
        dataKeys.forEach((key) => {
          acc[key] = acc[key] || []; // Initialize array if not already
          acc[key].push(dataObj[key]);
        });
      }
      return acc;
    },
    { labels: [] }
  );

  const datasets = dataKeys.map((key, index) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize label
    data: sortedData[key],
    borderColor: colors[index], // Different colors for each dataset
    backgroundColor: colors[index],
    borderWidth: 1,
    fill: true,
  }));

  const data = {
    labels: sortedData.labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    barPercentage: 0.8,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          pointWidth: "1px"
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
    <div className='w-full h-[300px]'>
      <Line data={data} options={options} />
    </div>
  );
};

export default KeywordsTraffic;
