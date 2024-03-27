'use client'
import { Chart } from "react-google-charts";

interface Props {
  height: string;
  width: string;
  type: string;
}

const barColor = "Ffa500"

export const data = [
  ["", "Accumulative Passive Income per Month", { role: "style" }],
  ["Jan", 8.94, barColor ], 
  ["Feb", 10.49, barColor], 
  ["Mar", 19.3, barColor],
  ["Apr", 21.45, barColor], 
  ["May", 19.3, barColor],
  ["Jun", 19.3, barColor],
  ["Jul", 21.45, barColor],
  ["Ago", 19.3, barColor],
  ["Sep", 28.45, barColor],
  ["Oct", 29.3, barColor],
  ["Nov", 49.3, barColor],
  ["Dec", 39.3, barColor],
];

var options = {
  legend: { position: 'bottom' },
  chart: {
    title: 'Accumulative Passive Income per Month',
  },
  axes: {
    x: {
      0: { side: 'top', label: 'White to move'} // Top x-axis.
    }
  },
  bar: { 
    groupWidth: "90%",
  },
};


const ColumnChart = ({ height, width, type = 'ColumnChart' }: Props) => {
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

export default ColumnChart; 