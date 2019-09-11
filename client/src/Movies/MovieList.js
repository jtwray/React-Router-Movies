import React, {useState, useEffect} from 'react';
import {Link,Route} from "react-router-dom";
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';



const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    return getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map( movie => (
        <MovieDetails key={movie.id} movie={movie} />       
      ))}
    </div>
  );
}


export default MovieList; 