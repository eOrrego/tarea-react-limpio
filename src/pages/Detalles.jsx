import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

const Detalles = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchPokemon();
  }, [name]);


  return (
    <div className="container">
      <h1 className="text-info">Detalles del Pokemon</h1>
      {error && (
        <div>
          <h4 className="text-danger font-weight-700">Los pokemones no existe</h4>
        </div>
      )}
      {!error && (
        <div className="row">
          <h1>Nombre: {pokemon?.name}</h1>
          <h4>Peso: {pokemon?.weight}</h4>
          <h4>Talla: {pokemon?.height}</h4>
          <img src={pokemon?.sprite?.front_default} className="h-25" alt="" />
        </div>
      )}
      <Link to="/articulos">Volver</Link>
    </div>
  )
}

export default Detalles