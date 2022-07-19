import React from 'react';
import styled from 'styled-components';


export const ChartContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 100vh;
`
export const ChartHeader = styled.h1`
    display: inline-flex;
    background-color: #ffffff;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 5px;
    text-align: left;
    font-weight: bold;
    //background-color: gray;
    position: relative;
    padding: 5px 5px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 300px;
    font-size: 20px;
`
export const Line = styled.div`
    background-color: #ffffff;
    /* border-bottom: solid 2px;
    border-left: solid 2px;
    border-right: solid 2px;
    border-top: solid 2px; */
    box-shadow: 5px 5px 5px 5px gray;
    border-radius: 5px;
    margin-left: 300px;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 1100px;
   
   
`
export const Circles = styled.div`  //도넛, 파이 묶은 거(원형 그래프)
    background-color: #ffffff;
    box-shadow: 5px 5px 5px 5px gray;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    bottom: 600px;
    left: 1700px;
    width: 500px;
    height: 1000px;
`

export const Pie = styled.div`
    width: 300px;
    margin-top: 100px;
    margin-left: 100px;
`
export const Doughnut = styled.div`
    margin-top: 180px;
    margin-left: 100px;
    width: 300px;
`

export const Bar = styled.section`
    position: absolute;
    margin-top: 80px;
    margin-left: 300px;
    padding-right: 150px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px 5px gray;
    border-radius: 5px;
    display: flex;
    width: 1100px;
`

export const BarWidth = styled.div`
   position: relative;
   width: 500px;
   margin-right: 50px;
   margin-left: 50px;
`

export const BarHeight = styled.div`
    position: relative;
    width: 500px;

`



