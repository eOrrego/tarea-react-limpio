import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Card from '../components/Card';



const Inicio = () => {
  const [pelis, setPelis] = useState([]);
  const [buscar, setBuscar] = useState([]);
  const [error, setError] = useState(false);


  const buscarPelis = (e) => {
    e.preventDefault();
    const fetchPeli = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fab8e71ef7592de4e689d186ed867f84&query=${buscar}&language=es-ES&page=1&include_adult=false`);
        console.log("DAta:", pelis);
        setPelis(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchPeli();
  }


  return (
    <div>
      <h1>Página de Inicio</h1>

      <Link to="/articulos">
        <button className="btn btn-outline-info m-auto">Peliculas Polulares</button>
      </Link>


      <div className="container m-auto text-center">
      <form className='container m-4' onSubmit={buscarPelis}>
        <input type="text" placeholder='Buscar' onChange={(e) => setBuscar(e.target.value)} />
        <button type='submit' className='btn btn-primary'>Buscar</button>
      </form>
        <div className="row text-center mt-5">
          <h1 className="text-info">Peliculas encontradas:</h1>
          {error && (
            <div>
              <h4 className="text-danger font-weight-700">No hay peliculas disponibles</h4>
            </div>
          )}
          <div className="row m-auto text-center">
            {pelis.map((peli) => (
              <Card key={peli.id} id={peli.id} name={peli.title} imgpath={peli.poster_path} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Inicio