import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
//importing without {} means default import and no exclusiveness
import styled from "styled-components";
import lambo from "../assets/lambo.jpg";

const Styles = styled.div`
    .jumbo{
        background: url(${lambo}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => {
    return(
        <Styles>
            <Jumbo fluid className = "jumbo">
                <div className = "overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Learn coding</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}