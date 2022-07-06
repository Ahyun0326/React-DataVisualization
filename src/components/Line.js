import LineChart from "./LineChart";
import { useState } from "react";
import { UserData } from "../Data";

function Line(){
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
        <div style={{width:700}}>
            <LineChart chartData={userData}/>
         </div>
    );

}

export default Line;