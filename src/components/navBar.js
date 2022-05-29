import React from "react"
import Logo from "../assets/logo.png"
import styled from "styled-components"
import Searchbar from "./SearchBar"

const Nav = styled.nav`
height: 20vh;
display: flex;
justify-content: space-around;
align-items: center;
`
export default function Navbar (){
    return(
        <Nav>
            <div>
                <img src={Logo}/>
            </div>           
        </Nav>
    )
}