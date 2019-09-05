import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';


const App=() => {
  const [savedList, setSavedList]=useState( [] );

  const addToSavedList=movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:movieID"  component={Movie} />
      </div>
    </div>
  );
};

export default App; 


{/**i had issues getting the match.params to not log undefined
my url displayed the correct url with the number of the item
I clicked on but in the console match.params was undefined. 

<MovieDetails key={movie.id} movie={movie} />

*/}
