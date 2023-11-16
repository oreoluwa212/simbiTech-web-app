import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Activities',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'UI/UX',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: ' rgba(250, 225, 200, 1)',
      backgroundColor:  'rgba(250, 225, 200, 0.5)',
    },
    {
      label: 'Mentorship Session',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(43, 0, 43)',
      borderRadius: '50',
      backgroundColor: 'rgb(43, 0, 43, 0.5)',
    },
  ],
};

 function lineCharts() {
  return (
    <div className="bg-white p-[1rem] border border-[#DFE1E6] rounded-3xl w-3/5 shadow-2xl h-[100%]">
      <p className="font-bold text-[#2B002B] text-[20px] ">Activities</p>
      <Line options={options} data={data} />
    </div>
  );
}
 export default  lineCharts;