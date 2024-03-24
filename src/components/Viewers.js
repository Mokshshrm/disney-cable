import styled from 'styled-components'
import React from 'react'


export default function Viewers(props) {
    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));


    @media (max-width: 768px){
        grid-template-column:repeat(1,minmax(0,1fr)) ;
    }
`

