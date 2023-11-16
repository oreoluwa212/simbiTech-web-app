import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: 'course progress',
      data: [20, 80],
      backgroundColor: [   
        'rgba(250, 225, 200, 1)',
        'rgba(245, 243, 246, 1)',
     
      ],
     
      borderWidth: 0.4,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Course Progress",
  },
  tooltips: {
    enabled: true,
    mode: "single",
  },
  legend: {
    display: true,
    position: "bottom",
  },
  aspectRatio: 1,
};

 function pieChart() {

  return (
    <div className=" bg-white p-[1rem] border border-[#DFE1E6] rounded-3xl shadow-2xl w-2/5 flex flex-col items-center h-[100%]">
      <p className="font-bold text-[#2B002B] text-[20px] mb-10">Course Progress</p>
      <div >
        <div className="w-48 h-78 ">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
export default pieChart;