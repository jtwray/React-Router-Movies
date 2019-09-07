import React from 'react';
import {Link} from "react-router-dom"

const SavedList=( {list, removeFromSavedList} ) => (
  <div className="saved-list">
    <h3 style={{display: "flex"}}>Saved Movies:</h3>
    {list&&list.map( movie => (
      <div key={movie.id}>
        <button
          style={{
            display: "flex",
            border: "2px inset pink",
            fontSize: ".5rem",
            width: "50px"
          }}
          onClick={removeFromSavedList}>remove</button>
        <span className="saved-movie">{movie.title}
        </span>
      </div>
    ) )}
    <Link className="home-button" to="/" >
      Home
    </Link>
  </div>
);


export default SavedList; 