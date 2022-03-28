import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
// import NewDisney from './NewDisney'
// import Originals from './Originals'
// import Trending from './Trending'

function Home() {
  useEffect(() => {

    const movies = async () => {
      const data = await getDocs(collection(db, "movies"));
     console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    movies();
  });

  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        {/* <NewDisney />
        <Originals />
        <Trending /> */}
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center /cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`