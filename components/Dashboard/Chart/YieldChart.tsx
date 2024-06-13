'use client';
import { Chart, type GoogleChartWrapperChartType } from 'react-google-charts';

interface Props {
  height: string;
  width: string;
  type: GoogleChartWrapperChartType;
  pieColor?: string;
}

const defaultPieData = [
  ['', ''],
  ['', 3],
  ['', 7]
];

const lineChartData = [
  ['', ''],
  ['', 0],
  ['', 3750]
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

  const data = type === 'LineChart' ? lineChartData : defaultPieData;

  return (
    <Chart
      chartType={type}
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};

export default YieldChart;
