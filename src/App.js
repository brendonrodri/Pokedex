import React,{useEffect, useState} from "react"
import Navbar from "./components/navBar"
import "./App.css"
import Searchbar from "./components/SearchBar"
import Pokedex from "./components/pokedex"
import { getPokemons } from "./components/Api"

export default function App (){
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async () =>{
    try{
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false)
    }catch(error){
      console.log("fetchPokemons error:", error);
    }
  }
  useEffect(()=>{
    console.log("carregou")
  })
  return(
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </>
  )
}