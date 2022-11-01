import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ name }) => {

    const navigate = useNavigate();
    const redirectToDetails = () => {
        navigate(`/detalles/${name}`)
    }

    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button type="button" onClick={redirectToDetails} className="btn btn-primary">
                    Ver más
                </button>
            </div>
        </div>
    )
}

export default Card