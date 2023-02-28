import React from "react";


const Movie = ({movie}) => {
console.log ('Movie');

    const isFavorite = false;

    return (
        <div className="card">
            <img className="card-img-top" src={movie.imageUrl}
                alt="titulo" />
            <div className="card-body">
                <h3>{movie.title}</h3>
                <button className={`btn ${isFavorite ? 'btn-success':'btn-outline-primary'} `}>Agregar</button>
            </div>
        </div>
    )
}

export default Movie ;