import React from 'react';
import './AllocationChart.scss';
import { Doughnut } from 'react-chartjs-2';

const AllocationChart = () => {
  const chartData = {
    labels: [
      'Private Sale 1%',
      'Project Development 1%',
      'Advisors 1%',
      'Air Drop 1%',
      'Marketing 2%',
      'Ambassador Program 3%',
      'Staking Reward 4%',
      'Liquidity 5%',
      'Public Presale 15%',
      'WL Presale 15%',
      'Core Team 25%',
      'Treasury Reserve 27%',
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 2, 3, 4, 5, 15, 15, 25, 27],
        backgroundColor: [
          '#F94144',
          '#FFD700',
          '#FF4500',
          '#32CD32',
          '#4169E1',
          '#800080',
          '#008080',
          '#00FFFF',
          '#FF1493',
          '#90BE6D',
          '#F3722C',          
          '#F94144',
        ],
      },
    ],
  };
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="allocation-chart-container">
      <section>
        <Doughnut data={chartData} options={chartOptions} />
      </section>
      <section>
        <h2>ALLOCATION OF THE $LBM TOKENS</h2>
        <p>We believe in a conservative approach to ensure price stability. Only a small - but significant - percentage of $LBM will be unlocked at the token generation event. This means that $LBM will enjoy stability and reputational excellence.</p>
        <div className="legend-container">
          {chartData.labels.map((label, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllocationChart;
