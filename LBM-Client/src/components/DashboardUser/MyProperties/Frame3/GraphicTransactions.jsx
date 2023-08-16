import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Tokens Sold',
      data: [50, 60, 70, 65, 75, 50,98,62,70,85,71,98],
      borderColor:  'rgba(255, 165, 0, 0.5)', // Cambia el color de la línea a gris
      fill: true, // Cambia el área debajo de la línea a un fondo relleno
      backgroundColor: 'rgba(255, 165, 0, 0.5)', // Establece el color del fondo del área
      tension: 0.4, // Ajusta la tensión de la línea (0 = recta, 1 = suavizada)
    },
    {
      label: 'Debt', // Etiqueta para la nueva línea
      data: [20, 10, 20, 45, 55, 20, 58, 72, 20, 35, 11, 48], // Datos para la nueva línea
      borderColor: 'rgba(0, 158, 212, 1)', // Color de la nueva línea
      fill: true,
      backgroundColor: 'rgba(0, 158, 212, 1)', // Color de fondo de la nueva área
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Line Chart Example',
    },
  },
  scales: {
    x: {
      display: true, // Muestra el eje X
    },
    y: {
      display: true, // Muestra el eje Y
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
