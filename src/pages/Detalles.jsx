import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

const Detalles = () => {
  const { id } = useParams();
  const [peli, setPeli] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPeli = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fab8e71ef7592de4e689d186ed867f84&language=es-Es`);
        setPeli(data);
        console.log("hola:", data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchPeli();
  }, [id]);

  let imgUrl = `https://image.tmdb.org/t/p/w500/${peli?.poster_path}`;

  return (
    <div className="container">
      <h1 className="text-info">Detalles de la Pelicula</h1>
      <Link to="/articulos">
        <button className="btn btn-outline-info m-auto">Volver</button>
      </Link>
      {error && (
        <div>
          <h4 className="text-danger font-weight-700">La pelicula no existe</h4>
        </div>
      )}
      {!error && (
        <div className="row">
          <h1>Titulo: {peli?.title}</h1>
          <img className='w-50' src={imgUrl} alt="" />
        </div>
      )}
    </div>
  )
}

export default Detalles