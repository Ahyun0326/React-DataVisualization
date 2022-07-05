import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function DoughnutChart({chartData}){
    return <Doughnut data = {chartData}/>;
}

export default DoughnutChart;