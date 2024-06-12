import styled from "styled-components"
import { React, useEffect, useReducer } from "react"

import LOGO from '../assets/images/logo.svg'
import HOMELOGO from '../assets/images/home-icon.svg'
import MOVIEICON from '../assets/images/movie-icon.svg'
import SEARCHICON from '../assets/images/search-icon.svg'
import SERIESICON from '../assets/images/series-icon.svg'
import WATCHLISTICON from '../assets/images/watchlist-icon.svg'
import ORIGINALS from '../assets/images/original-icon.svg'
import PROFILEPIC from '../assets/images/slider-badging.jpg'

import { auth } from '../firebase.js'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLogInDetails, setUserLogOutState } from "../features/user/userSlice.js"


export default function Header(Props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate("/home")
            }
            else{
                navigate("/")
            }
        })

    }, [userName])

    async function HandleLogin() {

        if (!userName) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).then(async (result) => {
                setUser(result.user)
                navigate("/home")
            }).catch(err => {
                alert(err.message)
            })

        } else if (userName) {
            auth.signOut().then(async () => {
                await dispatch(setUserLogOutState())
                navigate('/')
            }).catch((err) => {
                alert(err.message)
            })
        }
    }
    function setUser(user) {
        dispatch(setUserLogInDetails(user))
    }

    const data = [{ logo: HOMELOGO, text: "HOME", route: "/home" },
    { logo: WATCHLISTICON, text: "WATCHLIST", route: "/watchlist" },
    { logo: SEARCHICON, text: "SEARCH", route: "/search" },
    { logo: ORIGINALS, text: "ORIGINALS", route: "/originals" },
    { logo: SERIESICON, text: "SERIES", route: "/series" },
    { logo: MOVIEICON, text: "MOVIES", route: "/movies" }]

    const items = data.map((data, idx) =>
        <Items key={idx}>
            <a href={data.route}>
                <img src={data.logo} alt="NOting is here" />
                <span>{data.text}</span>
            </a>
            <div />
        </Items>
    )
    return (
        <Nav>
            <Logo href="/">
                <img src={LOGO} alt="Disney + logo"></img>
            </Logo>
            {!userName ?
                (
                    <LoginButton onClick={HandleLogin}>
                        Login
                    </LoginButton>
                ) :
                (
                    <>
                        <NavMenu>
                            {items}
                        </NavMenu>
                        <SignOut>
                            <UserProfile src={PROFILEPIC} alt="UserAvtar" ></UserProfile>
                            <DropDown>
                                <span onClick={HandleLogin}>Sign out</span>
                            </DropDown>
                        </SignOut>
                    </>
                )
            }
        </Nav>
    )
}

// Styled components Css : -

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
    padding:0px;
    margin: 0px;
    position: relative;
    margin-top: 16px;
    margin-right: auto;
    margin-left: 20px;
    @media (max-width:768px){
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
const LoginButton = styled.a`
    letter-spacing: 4px;
    font-weight: bold;
    font-size: px;
    border: 1px solid #f9f9f9;
    background-color: rgb(0,0,0,0.6);
    padding:12px 24px;
    border-radius: 8px;

    transition: all 0.8s ease 0s;
    &:hover{
        font-weight: bolder;
        cursor: pointer;
        background-color: #f9f9f9;
        color : black;
    }
`
const UserProfile = styled.img`
    width: 50px;
    height: 50px;
`
const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background:rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb( 0 0 0 / 50%) 0px 0px 18px 0px;
    letter-spacing: 3px;
    padding: 10px;
    font-size: 14px;
    width: 100px;
    opacity: 0;
`
const SignOut = styled.div`
    position: relative;
    height: 48px;
    width:48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserProfile}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration:1s;
        }
    }
`
