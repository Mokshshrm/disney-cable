import styled from 'styled-components'
import React from 'react'
import MARVEL from '../assets/images/viewers-marvel.png'
import DISNEY from '../assets/images/viewers-disney.png'
import NATIONAL from '../assets/images/viewers-national.png'
import PIXAR from '../assets/images/viewers-pixar.png'
import STARWARS from '../assets/images/viewers-starwars.png'
import VIDEO1 from '../assets/videos/1564676115-marvel.mp4'
import VIDEO2 from '../assets/videos/1564674844-disney.mp4'
import VIDEO3 from '../assets/videos/1564676296-national-geographic.mp4'
import VIDEO4 from '../assets/videos/1564676714-pixar.mp4'
import VIDEO5 from '../assets/videos/1608229455-star-wars.mp4'


export default function Viewers(props) {
    return (
        <Container>
            <Wrap>
                <img src={MARVEL} alt='i-d' />
                <video src={VIDEO1} loop={true} autoPlay={true} muted={true} playsInline={true} />
            </Wrap>
            <Wrap>
                <img src={DISNEY} alt='i-d' />
                <video src={VIDEO2} loop={true} autoPlay={true} muted={true} playsInline={true} />

            </Wrap>
            <Wrap>
                <img src={NATIONAL} alt='i-d' />
                <video src={VIDEO3} loop={true} autoPlay={true} muted={true} playsInline={true} />

            </Wrap>
            <Wrap>
                <img src={PIXAR} alt='i-d' />
                <video src={VIDEO4} loop={true} autoPlay={true} muted={true} playsInline={true} />

            </Wrap>
            <Wrap>
                <img src={STARWARS} alt='i-d' />
                <video src={VIDEO5} loop={true} autoPlay={true} muted={true} playsInline={true} />
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap:25px;
    grid-template-columns: repeat(5, minmax(0,1fr));

    @media (max-width: 768px){
        grid-template-columns:repeat(1, minmax(0,1fr)) ;
    }
`
const Wrap = styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position:relative;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
    border: 3px solid rgba(249,249,249,0.1);
    img{
        height: 100%;
        width: 100%;
        inset: 0;
        display: block;
        object-fit: cover;
        position:absolute;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }
    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }
    &:hover{
        box-shadow: rgb( 0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color:rgba(249,249,249,0.8);
        video{
            opacity: 1;
        }
    }
`

