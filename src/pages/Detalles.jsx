import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading';

const Detalles = () => {
  const { id } = useParams();
  const [peli, setPeli] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPeli = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fab8e71ef7592de4e689d186ed867f84&language=es-Es`);
        console.log(data);
        setPeli(data);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchPeli();
  }, [id]);

  // let imgUrl = `https://image.tmdb.org/t/p/w500${peli?.poster_path}`;

  return (
    <Loading isLoading={loading}>
      <div className="container text-center">
        <h1 className="text-info">Detalles de la Pelicula</h1>
        <Link to="/articulos">
          <button className="btn btn-outline-danger m-auto">Volver</button>
        </Link>
        {error && (
          <div>
            <h4 className="text-danger font-weight-700">La pelicula no existe</h4>
          </div>
        )}
        {!error && (
          <div className="row m-auto text-center">
            <h1>{peli.title}</h1>
            <img className="img-fluid w-50 m-auto my-3 text-center" src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt={peli?.title} />
            <p>{peli.overview}</p>
          </div>
        )}
      </div>
    </Loading>
  )
}



export default Detalles