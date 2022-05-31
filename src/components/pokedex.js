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
export default function Pokedex (props){
    const {pokemons, loading} = props;
    return(
        <>
         <PokedexHeader>
            <h1>Pokedex</h1>
            <div>Paginação</div>
        </PokedexHeader>
        {loading ?(<div>
            Carregando....
        </div>):(<PokedexGrid>
            {pokemons.map((pokemon, index)=>{
                return(
                    <div>
                        <div>
                            {pokemon.id}
                        </div>
                        <div>{pokemon.name}</div>
                        <img alt={pokemon.name} src={pokemon.sprites.front_default}/>
                    </div>
                )
            })}
        </PokedexGrid>)}
        </>
       
    )
}