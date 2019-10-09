import React, {useState, useEffect} from 'react';
import {NavLink, Route, Link} from 'react-router-dom';
import MetaScore from './MetaScore';
import Director from './Director';
import Form from './Form';
import Stars from './Stars';
import axios from 'axios';

const Movie=props => {
	const initialState=[{title: "", comment: ""},]
	const [reviews, setReviews]=useState( initialState )
	const [movie, setMovie]=useState( {} );
	console.log( props.match );
	useEffect(
		() => {
			const id=props.match.params.movieID;

			// change ^^^ that line and grab the id from the URL
			// You will NEED to add a dependency array to this effect hook

			axios
				.get( `http://localhost:5000/api/movies/${id}` )
				.then( response => setMovie( response.data ) )
				.catch( error => console.error( error ) );
		},
		[setMovie]
	);

	// Uncomment this only when you have moved on to the stretch goals
	const saveMovie=() => {
		const addToSavedList=props.addToSavedList;
		addToSavedList( movie );
	};

	if( !movie ) {
		return <div> Loading movie information... </div>;
	}

	const {title, director, metascore, stars}=movie;
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2> {title} </h2>
				<div className="movie-director">
					Director: <em> {director} </em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong> {metascore} </strong>
				</div>
				<h3> Actors </h3>
				<nav>
					<NavLink to={`/movies/${movie.id}/Metascore`}>MetaScore</NavLink>
					<NavLink to={`/movies/${movie.id}/Director`}>Director </NavLink>
					<NavLink to={`/movies/${movie.id}/Starring`}>Starring </NavLink>
				</nav>
				<Route path="/movies/:movieID/Metascore" render={props => <MetaScore movie={movie} {...props} />} />
				<Route path="/movies/:movieID/Director" render={props => <Director movie={movie} {...props} />} />
				<Route path="/movies/:movieID/Starring" render={props => <Stars movie={movie} {...props} />} />
				<Form reviews={reviews} setReviews={setReviews}/>
			</div>
			{!props.savedList.includes( movie )? (
				<div className="save-button" onClick={() => saveMovie( movie )}>
					Save
				</div>
			):(
					'saved'
				)}
		</div>
	);
};
export default Movie;
