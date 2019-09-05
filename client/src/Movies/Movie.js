
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie=( props ) => {
  const {movieID}=props.match.params;
  console.log(props)
  const [movie, setMovie] = useState({});
 
  useEffect( () => {
  
    const id=props.location.pathname;
      
   
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get( `http://localhost:5000/api${id}` )
      .then( response => {
        console.log( response.data )
        console.log( props.location.pathname.split( "/" )[2] )
        setMovie( response.data );
      } )
      .catch( error => {
        console.error( error );
      } );

  }, [props.location.pathname]);
  

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    props.addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em> 
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars&&stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={()=>saveMovie}>Save</div>
    </div>
  );

}

export default Movie;
