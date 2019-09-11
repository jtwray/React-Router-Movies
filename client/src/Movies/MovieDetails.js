import React from 'react'
import {Link} from 'react-router-dom'
import MovieCard from './MovieCard'

function MovieDetails( {movie} ) {
    const {id}=movie;
    return (
        <Link to={`/movies/${id}`} >
            <MovieCard movie={movie} />
        </Link>

    );
}

export default MovieDetails;