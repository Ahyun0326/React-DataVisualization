import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import {UserData} from './Data';

function App(){
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
    <div className="App">
      <div className="line">
        <div style={{width:700}}>
         <BarChart chartData={userData}/>
       </div>
        <div style={{width:700}}>
          <LineChart chartData={userData}/>
        </div>
      </div>
      <div className="line">
       <div style={{width:500}}>
          <PieChart chartData={userData}/>
       </div>
       <div style={{width:500}}>
          <DoughnutChart chartData={userData}/>
       </div>
      </div>
    </div>
  );
}

export default App;
