import React from "react";
import { MainContainer } from '../styles/Container.styled';
import {MainHeader, HeaderButton} from "./Header.styled";
import { Button } from "react-bootstrap";
import Cards from "./Cards";
import { MainCharts } from "../styles/Cards.styled";

function Main(){
    return(
       <>
            <MainContainer>
                <MainHeader>
                    Data <br />
                    Visualization
                </MainHeader>
                <HeaderButton>
                    <Button variant="outline-success" size="lg" href="Charts">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        View Charts
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Button>
                </HeaderButton>
            </MainContainer>
            <MainCharts>
                <Cards />
            </MainCharts>
       </> 

       
        /* <img className="headerImage" alt = "test1" src="img/test2.jpg" /> */
        
        // <Container>
        //     <Header>
        //         <MainHeader>
        //             <h1>Hello!</h1>
        //         </MainHeader>
        //     </Header>
        // </Container>

    );
}

export default Main;