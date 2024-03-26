'use client';
import { Chart } from 'react-google-charts';

interface Props {
  height: string;
  width: string;
  type: string;
}

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
  backgroundColor: 'transparent',
};

const YieldChart = ({ height, width, type = 'PieChart' }: Props) => {
  return (
    <Chart
      chartType={type as any}
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};

export default YieldChart;
