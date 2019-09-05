import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';


const App=() => {
  const [savedList, setSavedList]=useState( [] );

  const addToSavedList=movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route exact path="/" render={( props ) => (
        <Movie {...props} addToSavedList={addToSavedList()} list={savedList} />
      )}
      />
      <Route to="/" component={Movie} />

      <Route to="/movies" component={MovieList} />
      <Route exact to={`/movies/:movieID`} component={Movie} />



    </div>
  );
};

export default App;
