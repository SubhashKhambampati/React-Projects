import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider.js'
import Viewers from './Viewers.js'
import Movies from './Movies.js'
import { useEffect , useState } from 'react'


function Home() {

  useEffect(() => { 
    console.log("hello")
  } 
  , []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      
      
        
    </Container>
  );
}

export default Home;

const Container = styled.main`

    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw+5px);
    position:relative;
    color:white;
    overflow-x:hidden;

    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        background-size: cover;
        content:"";
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }


`