'use client';
import { Chart } from 'react-google-charts';

export const data = [
  ['', ''],
  ['', 2],
  ['', 7],
];

export const options = {
  title: '',
  pieHole: 0.6,
  is3D: false,
  legend: 'none',
  tooltip: { trigger: 'none' },
  pieSliceText: 'none',
  slices: { 0: { color: '#9BB0C9' }, 1: { color: '#86D8DB' } },
};

const YieldChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="180px"
      height="180px"
      data={data}
      options={options}
    />
  );
};

export default YieldChart;
