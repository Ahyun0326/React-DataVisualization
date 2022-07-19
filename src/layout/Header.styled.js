import React from "react";
import styled from "styled-components";

/*
export const Header = styled.section `
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    justify-content: center;
    overflow: hidden;
    align-items: center;
  
    
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        max-width: 100%;
        min-height: 40px;
        display: inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform: scaleX(1.5);
        background-position: right top;
        background-size: 100vw 200px;
        background-color: #282c34;
    }
    
`

export const MainHeader = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 500px;
    background-color: transparent;
`
*/

export const MainHeader = styled.h1`
    display: inline-flex;
    text-align: left;
    font-weight: bold;
    padding-bottom: 10px;
    //background-color: gray;
    position: relative;
    top: 25%;
    left: 10%;
    font-size: 80px;
    border-bottom: solid 2px;
    border-color: gray;
`
export const HeaderButton = styled.div`
    position: relative;
    top: 27%;
    left: 10%;
`