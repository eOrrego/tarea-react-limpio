import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';


const Articulos = () => {
  const [pelis, setPelis] = useState([]);
  const [error, setError] = useState(false);

  const fetchPelis = async () => {
    try {
      const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fab8e71ef7592de4e689d186ed867f84&language=es-Es');
      setPelis(data.results);
      console.log("data:",data.results);
      setError(false);
    } catch (errorpe) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchPelis();
  }, [])



  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="text-info">Peliculas Populares</h1>
        {error && (
          <div>
            <h4 className="text-danger font-weight-700">No hay peliculas disponibles</h4>
          </div>
        )}
        <div className="row">
          {pelis.map((peli) => (
            <Card key={peli.id} id={peli.id} name={peli.title} imgpath={peli.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articulos