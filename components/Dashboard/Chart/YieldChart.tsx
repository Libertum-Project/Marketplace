'use client';
import { Chart } from 'react-google-charts';
type GoogleChartWrapperChartType = 'LineChart' | 'PieChart';

interface Props {
  height: string;
  width: string;
  type: GoogleChartWrapperChartType;
  pieColor?: string;
}

export const data = [
  ['', ''],
  ['', 3],
  ['', 7]
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
      1: { color: pieColor ?? '#86D8DB' }
    },
    backgroundColor: 'transparent'
  };

  if (type === 'LineChart') {
    const data = [
      ['', ''],
      ['', 0],
      ['', 3750]
    ];
    return (
      <Chart
        chartType={type as GoogleChartWrapperChartType}
        width={width}
        height={height}
        data={data}
        options={options}
      />
    );
  }

  return (
    <Chart
      chartType={type as GoogleChartWrapperChartType}
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};

export default YieldChart;
