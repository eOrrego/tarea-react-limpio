import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Articulos from '../components/Articulos'
import Detalles from '../components/Detalles'
import Inicio from '../components/Inicio'
import Navbar from '../components/Navbar'
import Pagina404 from '../components/Pagina404'

const RouterPrincipal = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to="/inicio" />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/detalles' element={<Detalles />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal