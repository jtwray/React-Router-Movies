import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = movie => {
		const savedList = this.state.savedList;
		savedList.push(movie);
		this.setState({ savedList });
	};

	render() {
		return (
			<div>
				<SavedList list={this.state.savedList} />
				<div className='nav-links'>
					<Link to='/'>MovieList</Link>
				</div>
				<div>
          <Link to='/movies/:id'>Movie</Link>
          
				</div>
				<div>
					<Route path='/' exact component={MovieList} />
					<Route path='/movies/:id' exact component={Movie} />
				</div>
			</div>
		);
	}
}
