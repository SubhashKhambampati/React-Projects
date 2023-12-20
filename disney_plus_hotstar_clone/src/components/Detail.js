import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>

        <Background>
            <img src = "/images/pixar-bao.jpg" alt = "" />
        </Background>

        <ImageTitle>
            <img src = "/images/bao.svg" alt = "" />
        </ImageTitle>

        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="play" />
                <span>Play</span>

            </PlayButton>
            <TrailerButton>
                <img src = "/images/play-icon-white.png" alt = "" />
                <span>Trailer</span>

            </TrailerButton>

            <AddButton>
                <span>+</span>
            

            </AddButton>
            <GroupWatchButton>
            <img src = "/images/group-icon.png" alt = "" />

            </GroupWatchButton>
            
        </Controls>
        <SubTitle>
         2018 . 7m . Family , Fantasy , Kids , Animation.
        </SubTitle>
        <Description>
            
        A family of undercover superheroes , while trying to live the quiet suburban life , are forced into action to save the world.
        </Description>
      
    </Container>
  )
}

export default Detail


const Container = styled.div`

min-height:calc(100vh-70px);
padding:0 calc(3.5vw+5px);
position:relative;
margin-left:70px;


`

const Background = styled.div`
position:fixed;
z-index:-1;
top:0;
bottom:0;
left:0;
right:0;
opacity:0.8;

img{

    width:100%;
    height:100%;
    object-fit: cover;

}

`
const ImageTitle = styled.div`

height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-left:-70px;
margin-top:70px;
img{

    width:100%;
    height:100%;
    object-fit: contain;

}


`

const Controls = styled.div`
margin-top:20px;
display:flex;
flex-direction:row;
align-items:center;



`
const PlayButton = styled.button`

border-radius:4px;
font-size:5px;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.06px;
display:flex;
flex-direction:row;
align-items:center;
height:56px;
background:rgb(249.249,249);
border:none;
cursor:pointer;

margin-left:70px;

span{
    font-size:20px;
}

&:hover{
    background:rgb(198,198,198);

}

`
const TrailerButton = styled(PlayButton)`

background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
margin-left:0px;


`
const AddButton = styled.button`

width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;

margin-right:16px;
border:2px solid white;
border-radius:50%;
background-color:rgba(0,0,0,0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}

`
const GroupWatchButton = styled.button`

background:black;
border-radius:50%;
border:3px solid white;



`

const SubTitle = styled.button`

color:rgb(249,249,249);
font-size:15px;
min-height:20px;
background-color:rgba(0,0,0,0);
border:0 solid transparent;
margin-top:26px;
margin-left:70px;


`

const Description = styled.button`


width:500px;
line-height:1.4;
display:flex;
margin-top:16px;
color:rgb(249,249,249);
font-size:20px;
min-height:20px;
background-color:rgba(0,0,0,0);
border:0 solid transparent;
margin-left:70px;


`
