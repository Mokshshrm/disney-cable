import React from "react";
import styled from 'styled-components'
import HOMEBACKGROUND from '../assets/images/home-background.png'
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect, } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase.js'
import { setMovies} from "../features/movie/movieSlice.js";
import { selectUserName } from "../features/user/userSlice.js";
import { collection, getDocs, addDoc, or } from 'firebase/firestore';

export default function Home(props) {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)
    let recommended = []
    let newDisney = []
    let originals = []
    let trending = []

    useEffect(() => {
        const collectionRef = collection(db, 'Movies')
        async function GetDoc() {
            const QuerySnapShot = await getDocs(collectionRef)
            QuerySnapShot.forEach((doc) => {
                {
                    const MovieData = doc.data();
                    switch (MovieData.type) {
                        case "original":
                            originals = [...originals, { id: doc.id, ...MovieData }]
                            break
                            case "trending":
                                trending = [...trending, { id: doc.id, ...MovieData }]
                                break
                                case "recommend":
                                    recommended = [...recommended, { id: doc.id, ...MovieData }]
                                    break
                                    case "new":
                            newDisney = [...newDisney, { id: doc.id, ...MovieData }]
                            break
                    }
                }
            })
            dispatch(setMovies(
                {
                    recommended: recommended,
                    newDisney: newDisney,
                    originals: originals,
                    trending: trending,
                }
            ))
        }
        GetDoc()
    }, [userName])
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommended />
            <NewDisney />
            <Originals />
            <Trending />
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

    &:after{
        background: url(${HOMEBACKGROUND}) center center / cover no-repeat fixed;
        position: absolute;
        inset: 0px;
        opacity: 1;
        content:'';
        z-index: -1;
    }
`



