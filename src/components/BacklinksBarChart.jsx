import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BacklinksBarChart = ({ data }) => {
  if (!data) return null; // Early return if no data is provided

  // Extract dynamic labels based on the provided data
  const labels = ['Business', ...data.total_backlinks[1].competitors.map(c => Object.keys(c)[0])];

  // Extract corresponding data values
  const datasetData = [
    data.total_backlinks[0].business, // Business value
    ...data.total_backlinks[1].competitors.map(c => Object.values(c)[0]), // Competitor values (Wordfence, Sucuri)
  ];

  // Prepare data for the chart
  const chartData = {
    labels: labels, // Dynamic labels
    datasets: [
      {
        label: 'Backlinks', // Label for the bars
        data: datasetData, // Dynamic data
        backgroundColor: ['#4A90E2', '#50E3C2', '#F5A623'], // Color for each bar (adjust colors as needed)
        borderColor: ['#357ABD', '#38B5A1', '#D9882E'], // Border colors for each bar
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
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
    },
    plugins: {
      legend: {
        display: false, // Hides the legend if not needed
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw.toLocaleString()} backlinks`, // Custom tooltip format
        },
      },
    },
  };

  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background: "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className="rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95 bg-clip-padding"
      >
        <div className="h-full w-full space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] text-[#fff] font-[550] truncate">
              Top Backlinks
            </h2>
          </div>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BacklinksBarChart;
