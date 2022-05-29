import React,{useState} from "react"
import styled from "styled-components"
import { searchPokemon } from "./Api"
const SearchContainer = styled.div`
    display: flex;
    margin: 0px auto;
    padding: 0 20px;
    align-items: center;
`
const SearchBarInput = styled.div`
background: #fff;
margin-right: 20px;
    input{
        padding: 10px;
        margin-right: 20px;
        box-shadow: 0px 2px 2px  rgba(0, 0, 0, 0.25);
        border: none;
    }
`
const ButtonContainer = styled.div`
    button{
        background-color: #0e6f9f;
        height: 4.5vh;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none;
        color: #fff;
        padding: 10px 12px;
    }
    &:hover{
        transform: scale(1.1);
        
    }
`
export default function Searchbar (props){
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon]= useState()
    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () =>{
        onSearchHandler(search)
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }
    return(
        <SearchContainer>
            <SearchBarInput>
                <input onChange={(e)=>{onChangeHandler(e)}} placeholder="Buscar pokemon" />
            </SearchBarInput>
            <ButtonContainer>
                <button onClick={(e) => {onButtonClickHandler(e)}}>Buscar</button>
            </ButtonContainer>
           {pokemon ?(
               <div>
                   <div>Nome: {pokemon.name}</div>
                   <div>Peso: {pokemon.weight}</div>
                   <img src={pokemon.sprites.front_default}/>
               </div>
           ): null}
        </SearchContainer>
    )
}