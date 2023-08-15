import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Number of Users',
        data: [50, 100, 70, 80, 75, 80, 110, 120, 100, 120, 150, 160],
        backgroundColor: 'white', // Orange background
        borderColor: 'white', // White lines
        borderWidth: 2, // Thicker lines
        borderRadius: 10, // Rounded border
        barThickness: 6, // Set the thickness (width) of the bars for this dataset
      },
    ],
  };
  
  const options = {
    
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false
        }},
    
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    scales: {
        x: {
          display:false, // Hide the X-axis ticks and grid lines
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            color: 'white', 
          },
        },
        y: {
          display: true, // Hide the Y-axis ticks and grid lines
          beginAtZero: true,
          ticks: {
            color: 'white', 
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },

  };

  const BarChart = () => {
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;
  