import {Link} from 'react-router-dom'
import React from 'react';

const SavedList=props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list&&props.list.map( movie => (
      <span className="saved-movie">{movie.title}</span>
    ) )}
    <div className="home-button">
      <Link to="/">
        Home
    </Link>
    </div>
  </div>
);

export default SavedList;

