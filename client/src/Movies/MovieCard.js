import React from 'react';
import {NavLink, Route, Link} from 'react-router-dom';
import MetaScore from './MetaScore';
import Director from './Director';
import Stars from './Stars';

const MovieCard = ({movie}) => {
	const {title, director, metascore, stars, id} = movie;

	return (
		<div className="movie-card" key={id}>
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<nav>
				<NavLink to={`/movies/${movie.id}/Metascore`}>MetaScore</NavLink>
				<NavLink to={`/movies/${movie.id}/Director` }>Director </NavLink>
				<NavLink to={`/movies/${movie.id}/Starring` }>Starring </NavLink>
			</nav> 
			<Route path="/movies/:movieID/Metascore" render={props => <MetaScore movie={movie} {...props} />} />
			<Route path="/movies/:movieID/Director"  render={props => <Director  movie={movie}  {...props} />} />
			<Route path="/movies/:movieID/Starring"  render={props => <Stars     movie={movie}     {...props} />} />
		</div>
	);
};

export default MovieCard;
