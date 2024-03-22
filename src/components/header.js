import styled from "styled-components"
import React from "react"
import LOGO from '../assets/images/logo.svg'
import HOMELOGO from '../assets/images/home-icon.svg'
import MOVIEICON from '../assets/images/movie-icon.svg'
import SEARCHICON from '../assets/images/search-icon.svg'
import SERIESICON from '../assets/images/series-icon.svg'
import WATCHLISTICON from '../assets/images/watchlist-icon.svg'
import ORIGINALS from '../assets/images/original-icon.svg'

export default function Header(Props) {
    const data = [{ logo: HOMELOGO, text: "HOME" }, { logo: WATCHLISTICON, text: "WATCHLIST" }, { logo: SEARCHICON, text: "SEARCH" }, { logo: ORIGINALS, text: "ORIGINALS" }, { logo: SERIESICON, text: "SERIES" }, { logo: MOVIEICON, text: "MOVIES" }]
    const items = data.map(data =>
        <Items>
            <a href="/home">
                <img src={data.logo} alt="NOting is here" />
                <span>{data.text}</span>
            </a>
            <div />
        </Items>)
    return (
        <Nav>
            <Logo>
                <img src={LOGO} alt="Disney + logo"></img>
            </Logo>
            <NavMenu>
                {items}
            </NavMenu>
        </Nav>
    )
}
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    padding: 0 36px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 16px;
    z-index: 3;

`
const Logo = styled.a`
    padding: 0;
    width:80px;
    margin-top: 8px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowwrap;
    height: 100%;
    justify-content: flex-end;
    padding: 0px;
    margin: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    padding-top: 4px;
    @media  (max-width:768px){
        display: none;
    }
`
const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
        display: flex;
        padding: 0 24px;
        align-items: center;
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        };
        span{
            color: rgb(249,249,249);
            font-size:13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            margin-left: 8px;
            margin-top: 4px;
            white-space: nowrap;
            position: relateive;
            font-weight:bold;
            letter-spacing: 1.5px;
        };
    };
    div{
        visibility: hidden;
        height: 2px;
        width: 100%;
        background-color: #f9f9f9;
        margin-left: 2px;
        margin-top: 8px;
        transform-origin: center;
        transform: scaleX(0);   
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    };
    &:hover{
        div{
            visibility: visible;
            transform: scaleX(1)
        }
    }
`

