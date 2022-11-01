import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Está es la página de inicio</p>

      <Link to="/articulos">
        <button className="btn btn-outline-info m-auto">Peliculas Polulares</button>
      </Link>

    </div>
  )
}

export default Inicio