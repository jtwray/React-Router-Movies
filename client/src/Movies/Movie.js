import MovieCard from "./MovieCard";
import React, {Component} from "react";
import axios from "axios";
export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null,
		};
	}

	componentDidMount() {
		this.fetchMovie(this.props.match.params.id);
	}

	fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/:${id}`)
			.then((response) => {
				this.setState(() => ({movie: response.data}));
			})
			.catch((error) => {
				console.error(error);
			});
	};
	
	componentWillReceiveProps( newProps ) {
		if( this.props.match.params.id!==newProps.match.params.id ) {
			this.fetchMovie( newProps.match.params.id );
			//   }
		}
		this.saveMovie=() => {
			const addToSavedList=this.props.addToSavedList;
			addToSavedList( this.state.movie )
		}
      
    }
  
	render() {
		if (!this.state.movie) {
			return <div>Loading movie information...</div>;
		}
		return ( <div>
			<MovieCard movie={this.state.movie} handleAddMovie={this.saveMovie}/>
			
			</div>
			);
	}
}
