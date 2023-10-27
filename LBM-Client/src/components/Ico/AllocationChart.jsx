import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './AllocationChart.scss';

const AllocationChart = () => {
  const chartData = {
    labels: [
      'Private Sale',
      'Project Development',
      'Advisors',
      'Air Drop',
      'Marketing',
      'Ambassador Program',
      'Staking Reward',
      'Liquidity',
      'Public Presale',
      'WL Presale',
      'Core Team',
      'Treasury Reserve',
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 2, 3, 4, 5, 15, 15, 25, 27],
        backgroundColor: [
          '##F94144',
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

  return (
    <div className="allocation-chart-container">
      <section>
        <Doughnut data={chartData} />
      </section>
      <section>
        <h2>ALLOCATION OF THE LBM TOKENS</h2>
        <p>We believe in conservative approach to ensure price stability. Only a small -but significant- percentage of $LBM will be unlocked at the token generation event. This means that $LBM will enjoy stability and reputational excellence. </p>
      </section>
    </div>
  );
};

export default AllocationChart;
