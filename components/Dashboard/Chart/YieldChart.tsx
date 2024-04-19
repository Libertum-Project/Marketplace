'use client';
import { Chart } from 'react-google-charts';

interface Props {
  height: string;
  width: string;
  type: string;
  pieColor?: string;
}

export const data = [
  ['', ''],
  ['', 2],
  ['', 7],
];

const YieldChart = ({ height, width, type = 'PieChart', pieColor }: Props) => {
  const options = {
    title: '',
    pieHole: 0.6,
    is3D: false,
    legend: 'none',
    tooltip: { trigger: 'none' },
    pieSliceText: 'none',
    slices: {
      0: { color: '#9BB0C9' },
      1: { color: pieColor ? pieColor : '#86D8DB' },
    },
    backgroundColor: 'transparent',
  };
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
