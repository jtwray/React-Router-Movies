import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {list} = this.props;
		return (
			<div className="saved-list">
				<h3>Saved Movies:</h3>
				{list.map((movie) => (
					<span className="saved-movie">{movie.title}</span>
				))}
				<div className="home-button">
					<Link to="/">Home</Link>
				</div>
			</div>
		);
	}
}
