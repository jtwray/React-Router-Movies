import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route to="/" exact component={MovieList}/>
      <Route to="/movies/:id" exact component={Movie}/>
      
    </div>
  );
};

export default App;
