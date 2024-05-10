'use client';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

interface Props {
  height: string;
  width: string;
  type: string;
  monthlyIncome: number;
}

const barColor = 'Ffa500';

const options = {
  legend: 'none',
  chart: {
    title: 'Accumulative Passive Income per Month',
  },
  axes: {
    x: {
      0: { side: 'top', label: 'White to move' },
    },
  },
  bar: {
    groupWidth: '90%',
  },
};

const ColumnChart = ({ height, width, type = 'ColumnChart', monthlyIncome }: Props) => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newData: [string, number, string][] = [];

    for (let i = currentMonth; i < currentMonth + 12; i++) {
      const month = i % 12;
      const year = currentYear + Math.floor(i / 12);
      const monthName = new Date(year, month).toLocaleString('default', {
        month: 'short',
      });
      const previousIncome = newData[newData.length - 1]?.[1] ?? 0;
      const income = month === currentMonth ? monthlyIncome : previousIncome + monthlyIncome;
      newData.push([monthName, income, barColor]);
    }

    setChartData([['', 'Accumulative Passive Income per Month', { role: 'style' }], ...newData]);
  }, [monthlyIncome]);

  return <Chart chartType={type as any} width={width} height={height} data={chartData} options={options} />;
};

export default ColumnChart;
