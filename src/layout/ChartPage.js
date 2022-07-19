import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import DoughnutChart from "../components/DoughnutChart";
import { useState } from "react";
import { UserData } from "../Data";
import { ChartContainer, Line, Bar, Pie, Doughnut, ChartHeader, BarWidth, BarHeight, Circles} from "../styles/ChartPage.styled";

function ChartPage(){
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Losted",
            data: UserData.map((data) => data.userLost),
            backgroundColor: [
              "rgba(75, 192, 192, 1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
    });
    return (
        <ChartContainer>
            <ChartHeader>
                Charts
            </ChartHeader>
            <Line>
                <LineChart chartData={userData} />
            </Line>
            <Bar>
                <BarWidth>
                    <BarChart chartData={userData} />
                </BarWidth>
                 <BarHeight>
                    <BarChart chartData={userData} />
                </BarHeight>
            </Bar>
            <Circles>
                <Pie> <PieChart chartData={userData}/> </Pie>
                <Doughnut> <DoughnutChart chartData={userData}/> </Doughnut>
            </Circles>
         </ChartContainer>
    );
}
export default ChartPage;