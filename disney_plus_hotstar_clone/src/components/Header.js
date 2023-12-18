
import React from 'react'
import styled from 'styled-components'



function Header() {

  return (

    <Nav>

        <Logo src="/images/logo.svg" alt = "logo"/>
        <NavMenu>
            <a>

                <img src="/images/home-icon.svg"/>
                <span>HOME</span>

            </a>
            <a>

                <img src="/images/search-icon.svg"/>
                <span>Search</span>

            </a>
            <a>

                <img src="/images/watchlist-icon.svg"/>
                <span>watchlist</span>

            </a>
            <a>

                <img src="/images/original-icon.svg"/>
                <span>original</span>

            </a>
            <a>

                <img src="/images/movie-icon.svg"/>
                <span>Movies</span>

            </a>
            <a>

                <img src="/images/series-icon.svg"/>
                <span>series</span>

            </a>
            

        </NavMenu>
        <UserImg src="https://i.pinimg.com/736x/92/26/d7/9226d738bb7e00aa1bff0b73b786ae00.jpg"/>
       
        
    </Nav>
  );
}

export default Header;

const Nav = styled.div`

height:70px;
background:#090b13;
display:flex;
align-items:center;
color:white;
padding:0 36px;



`

const Logo = styled.img`
    width:80px;
    object-fit:contain;



`
const NavMenu = styled.div`

display:flex;
flex:1;
margin-left:25px;
align-items:center;

a{

    display:flex;
    align-items:center;
    padding:0 12px;

    img{
            
            height:20px;

    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        text-transform:uppercase;

        &:after{
            content:"";

            height:2px;
            
            position:absolute;
            
            left:0;
            background:white;   
            right:0;
            bottom:-6px;
            opacity:0; 
            transform-origin:left center;
            transform:scaleX(0);
            transition:transform 300ms cubic-bezier(0.25,0.46,0.45,0.94) 0s, opacity 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

        }
        

    }
    &:hover{

        span:after{

       

        transform: scaleX(1);
        opacity:1;

        }

        
        
        

}

    
    
}





`

const UserImg = styled.img`

height:50px;
width:50px;
border-radius:50%;

object-fit: contain;







`