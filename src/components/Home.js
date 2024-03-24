import React from "react";
import styled from 'styled-components'
import HOMEBACKGROUND from '../assets/images/home-background.png'
// import ImageSlider from "./ImageSlider";

export default function Home(props) {
  
    return (
        <Container>
            {/* <ImageSlider /> */}
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x:hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);

    &::after{
        background: url(${HOMEBACKGROUND}) center center / cover no-repeat fixed;
        position: absolute;
        inset: 0px;
        opacity: 1;
        content:'';
        z-index: -1;
    }
`