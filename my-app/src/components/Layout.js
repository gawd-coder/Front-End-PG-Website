import React from "react";
import {Container} from "react-bootstrap";

export const Layout = (props) => {
    //Container is a component that centers text on page and keeps it from overflowing/touching both sides of page
    return(
        <Container>
            {props.children}
        </Container>
    )    
}