import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';
import Loading from '../components/Loading';


const Articulos = () => {
  const [pelis, setPelis] = useState([]);
  const [error, setError] = useState(false);
  const [paginador, setPaginador] = useState(1)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchPelis = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fab8e71ef7592de4e689d186ed867f84&language=es-Es&page=${paginador}`);
        setPelis(data.results);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchPelis();
  }, [paginador])



  return (
    <Loading isLoading={loading}>
      <div className="container m-auto text-center">
        <div className="row text-center mt-5">
          <h1 className="text-info">Peliculas Populares</h1>
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
        <div className="btn-group m-auto my-5 d-flex" role="group" aria-label="Basic example">
          <button type="button" onClick={() => setPaginador((paginador) => paginador - 1)} className={(paginador - 1) ? "btn btn-outline-info p-3" : "btn btn-outline-danger p-3 disabled"}>Atras</button>
          <button type="button" onClick={() => setPaginador((paginador) => paginador + 1)} className={(paginador + 1) ? "btn btn-outline-info p-3" : "btn btn-outline-info p-3 disabled"}>Siguiente</button>
        </div>
      </div>
    </Loading>
  )
}

export default Articulos