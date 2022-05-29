import React from "react"
import styled from "styled-components"

const PokedexHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`
const PokedexGrid = styled.div`
display: grid;
gap: 10px;
grid-template-columns: repeat(3, 1fr);
`

export default function Pokedex (){
    return(
        <PokedexHeader>
            <h1>Pokedex</h1>
            <div>Paginação</div>
        </PokedexHeader>
    )
}