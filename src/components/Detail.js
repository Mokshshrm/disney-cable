import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//
import { db } from '../firebase'
import { getDoc, doc } from 'firebase/firestore'
import PLAYERIMAGE from '../assets/images/play.png'
import PLAYERIMAGE1 from '../assets/images/play1.png'
import GROUPICON from '../assets/images/group-icon.png'


export default function Detail(props) {

    const [componentState, setComponentState] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function FetchingMovieData() {
            try {

                const dataRef = (await getDoc(doc(db, 'Movies', id)))
                const data = dataRef.data()
                setComponentState((prev) => ({ ...data }))
            } catch (err) {
                console.log(err)
            }
        }
        FetchingMovieData()
    }, [id])

    return (
        (
            <Container>
                <Background>
                    <img src={componentState.backgroundImg} alt={componentState.title}></img>
                </Background>
                <ImageTitle>
                    <img src={componentState.titleImg} alt={componentState.title}></img>
                </ImageTitle>
                <ContenctMeta>
                    <Controls>
                        <Player>
                            <img src={PLAYERIMAGE} alt=''></img>
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img src={PLAYERIMAGE1} alt=''></img>
                            <span>Trailer</span>
                        </Trailer>
                        <Addlist>
                            <span></span>
                            <span></span>
                        </Addlist>
                        <GroupMatch>
                            <div>
                                <img src={GROUPICON} alt='group-icon'></img>
                            </div>
                        </GroupMatch>
                    </Controls>
                    <SubTitle>
                        {componentState.subTitle}
                    </SubTitle>
                    <Description>
                        {componentState.description}
                    </Description>
                </ContenctMeta>
            </Container>)
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x:hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Background = styled.div`
    left: 0px;
    opacity:0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img{
        width: 100vw;
        height: 100vh;
        @media (max-width:768px){
            width: initial;
        }
    }
`
const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img{
        max-width: 600px;
        min-width: 200px;
        width:35vw;
    }
`
const ContenctMeta = styled.div`
    max-width: 874px;
`
const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;

`
const Player = styled.button`
    font-size:15px ;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background-color: rgb(249,249,249);
    border: none;
    color:black;
    font-weight: bold;
    img{
        margin-right: 10px;
        width: 28px;
    }
    &:hover{
        background-color: rgb(198,198,198);
    }
    @media (max-width:768){
        height:45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }
`
const Trailer = styled(Player)`
    background-color: rgba(0,0,0,0.2);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`
const Addlist = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    span{
        background-color: rgb(249,249,249);
        display: inline-block;
        &:first-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2){
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
    }
`
const GroupMatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div{
        height: 40px;
        width: 40px;
        background: rgb(0,0,0);
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size:16px;
    min-height:20px;
    letter-spacing: 1.3px;
    font-weight: bold;
    @media (max-width:768px){
        font-size: 12px;
    }
`
const Description = styled.div`
    line-height: 1.3;
    font-size: 20px;
    letter-spacing: 1px;
    padding: 16px 0px;
    color: rgb(249,249,249);

    @media (max-width:768px){
        font-size: 14px;
    }

`   