import React from 'react';
import {Link} from "react-router-dom"

const SavedList=( {savedList,removeFromSavedList},props ) => {
  const reMovie=(movie) => {
    removeFromSavedList( movie )
  }
  return (
    <div className="saved-list">
      <h3 style={{display: "flex"}}>Saved Movies:</h3>
     {savedList&&savedList.map( movie => (
        <div key={movie.id}>
          <button
            style={{
              display: "flex",
              border: "2px inset pink",
              fontSize: ".5rem",
              width: "50px"
            }}
            onClick={()=>{reMovie(movie)}}
          >remove
        </button>
          <span className="saved-movie">{movie.title}
          </span>
        </div>
      ) )}
      <Link className="home-button" to="/" >
        Home
    </Link>
    </div>
  );
}

export default SavedList; 