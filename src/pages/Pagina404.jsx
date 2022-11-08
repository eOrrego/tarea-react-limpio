import React from 'react'
import { Link } from 'react-router-dom'

const Pagina404 = () => {
  return (
    <div className='container-fluid'>
        <h1>Página no encotnrada</h1>
        <h1><strong>Error 404</strong></h1>
        <Link to="/inicio">Volver al Inicio</Link>
    </div>
  )
}

export default Pagina404