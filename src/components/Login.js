import React, { useState } from "react";
import styled from 'styled-components'

export default function Login(props) {

    const [formData, setData] = useState({})

    return (
        <Container>
            <Content>content</Content>
        </Container>
    )
}
const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
    
`

const Content = styled.div`
    margin-bottom: 10vw;
    width:100% auto;
    position :relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImage = styled.div`
    height: 100%;
    background-image: url('../public/assets/image/login0background');
`