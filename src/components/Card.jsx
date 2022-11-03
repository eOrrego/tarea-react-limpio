import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, name, imgpath }) => {

    const navigate = useNavigate();
    const redirectToDetails = () => {
        navigate(`/detalles/${id}`)
    }

    // let imgUrl = `https://image.tmdb.org/t/p/w500/${imgpath}`;

    return (
        <div className="card my-3 m-auto text-center" style={{ width: '18rem' }}>
            <img src={`https://image.tmdb.org/t/p/w500/${imgpath}`} className="card-img-top p-2" alt={name}></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button type="button" onClick={redirectToDetails} className="btn btn-outline-info m-auto">
                    Ver más
                </button>
            </div>
        </div>
    )
}

export default Card