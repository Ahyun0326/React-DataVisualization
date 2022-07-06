// import { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Bar from './components/Bar';
import Line from './components/Line';
import Pie from './components/Pie';
import Doughnut from './components/Doughnut';
import Header from './Header';
/*
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
*/

function App(){
  
  //Routes 내부는 url에 따라 각각 다른 위치를 보여 줌
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path = "/" element = {<Header/>}/>
          <Route path = "/bar" element = {<Bar/>}/>
          <Route path = "/line" element = {<Line/>}/>
          <Route path = "/pie" element = {<Pie/>}/>
          <Route path = "/doughnut" element = {<Doughnut/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
