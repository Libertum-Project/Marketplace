import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Private Sale', 'Project Development', 'Advisors', 'Air Drop', 'Marketing', 'Ambassador Program', 'Staking Reward', 'Liquidity', 'Public Presale', 'WL Presale', 'Core Team', 'Treasury Reserve',],
    datasets: [
        {
            label: '# of Votes',
            data: [1, 1, 1, 1, 2, 3,4,5,15,15,25,27],
            backgroundColor: [
                'rgba(255, 255, 132, 0.9)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 3)',
                'rgba(54, 162, 235, 3)',
                'rgba(255, 206, 86, 3)',
                'rgba(75, 192, 192, 3)',
                'rgba(153, 102, 255, 3)',
                'rgba(255, 159, 64, 3)',
            ],
            borderWidth: 1,
        },
    ],
};

export function Chart() {
    return <Doughnut data={data} />;
}
