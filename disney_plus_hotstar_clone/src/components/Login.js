import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>

      <CTA>
        <CTALogo src = "/images/cta-logo1.svg" />

        <SignUp>GET ALL THERE</SignUp>

        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>

        <CTALogo src = "/images/cta-logo-two.png" />
        
        

        
      </CTA>

      
    </Container>
  )
}

export default Login


const Container = styled.div`

position:relative;
height:calc(100vh-70px);
display:flex;
width:100vw;
height:100vh;
align-items:center;
justify-content:center;

&:before{

  position:absolute;
  no-repeat:fixed;
  content:"";
  top:0;
  bottom:0;
  left:0;
  right:0;
  
  background-position:top;
  background-repeat:no-repeat;
  background-size:cover;
  background-image:url("/images/login-background.jpg");
  z-index:-1;
  opacity:0.7;




}


`



const CTA = styled.div`

max-width:650px;
width:60%;
padding:80px 40px;
display:flex;
flex-direction:column;



`

const CTALogo = styled.img`






`

const SignUp = styled.a`

width;100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
cursor:pointer;
font-size:18px;
text-align:center;
text-transform:uppercase;
text-decoration:none;

transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover{

  background:#0483ee;
}



`

const Description = styled.div`


font-size;11px;
color:white;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
margin-bottom:20px;


`