import React from "react";
import initialMovies from "../Movies/initialMovies";
import Movie from "./Movie";


const MovieList = () => {
console.log ('MovieList');

    return (
        <div className="container">
            <div className="row">
                {initialMovies.map(movie =>(
                    <div className="col-md-4" >
                            <Movie movie={movie} key={movie.id}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default MovieList;