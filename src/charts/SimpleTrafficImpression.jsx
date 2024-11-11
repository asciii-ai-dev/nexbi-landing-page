import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// LineChartComponent
const SimpleTrafficImpression = ({ chartData }) => {
  // Prepare data for the chart
  if(!chartData) return;
  const sortedData = Object?.keys(chartData)
    .sort() // Sorting the keys
    .reduce((acc, key) => {
      acc.labels.push(key);
      acc.traffic.push(chartData[key]["traffic"] || 0);
      acc.impressions.push(chartData[key]["impressions"] || 0);
      return acc;
    }, { labels: [], traffic: [], impressions: [] });

  const data = {
    labels: sortedData.labels,
    datasets: [
      {
        label: 'Traffic',
        data: sortedData.traffic,
        backgroundColor: '#088F8F',
        borderColor: "#088F8F",
        fill: true,
        tension: 0.3, // Smooth the line
      },
      {
        label: 'Impressions',
        data: sortedData.impressions,
        backgroundColor: "#FF5733",
        borderColor: "#FF5733",
        fill: true,
        tension: 0.3, // Smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Simple Traffic Impression',
      },
    },
    maintainAspectRatio: false, // Allows for height and width adjustment
    scales: {
        y: {
          beginAtZero: true,
        },
      },
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SimpleTrafficImpression;
