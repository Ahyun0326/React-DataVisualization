import React from "react";
import { Container } from '../styles/Container.styled';
import { Header, MainHeader } from "./Header.styled";

function Main(){
    return(
        <Container>
            <Header>
                <MainHeader>
                    <h1>Hello!</h1>
                </MainHeader>
            </Header>
        </Container>
    );
}

export default Main;