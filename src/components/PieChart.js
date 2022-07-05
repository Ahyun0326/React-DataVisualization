import React from 'react';
import { Pie } from 'react-chartjs-2';
import "chart.js/auto";

function PieChart({chartData}){
    return <Pie data={chartData}/>
}

export default PieChart;