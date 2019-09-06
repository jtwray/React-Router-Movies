import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';


const App=() => {
  const [savedList, setSavedList]=useState( [] );

  const addToSavedList=movie => {
    ( !savedList.includes( movie ) )?
      ( setSavedList( [...savedList, movie] )):( setSavedList( savedList ) ) ;
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:movieID" render={( props ) => (
          <Movie
            {...props}
            addToSavedList={addToSavedList}
          />
        )} />
      </div>
    </div>
  );
};

export default App;


