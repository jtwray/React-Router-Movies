import React from 'react';

const MovieCard=({movie,history},props) => {
	const {title, director, metascore, stars}=movie;
	const routeToShop=event => {
		event.preventDefault();
		console.log('starttimer',props,history,movie)
		setTimeout((event)=>history.push('/movies/1'),5000)
	}
	return (
		<div className="movie-card">
		<h2>{title}</h2>
		<div className="movie-director">
		  Director: <em>{director}</em>
		</div>
		<div className="movie-metascore">
		  Metascore: <strong>{metascore}</strong>
		</div>
		<h3 >Actors</h3>
 
		{stars.map(star => (
		  <div key={star} className="movie-star">
			{star}
		  </div>
		))}
	  </div>
  )
};

export default MovieCard;

