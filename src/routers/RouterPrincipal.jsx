import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Articulos from '../pages/Articulos'
import Detalles from '../pages/Detalles'
import Inicio from '../pages/Inicio'
import Navbar from '../components/Navbar'
import Pagina404 from '../pages/Pagina404'

const RouterPrincipal = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to="/inicio" />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/detalles' element={<Navigate to="/articulos" />} />
                <Route path='/detalles/:name' element={<Detalles />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal