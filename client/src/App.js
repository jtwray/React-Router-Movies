import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';


const App=() => {


  const [savedList, setSavedList]=useState( [] );


  const addToSavedList=movie => {
    const movieExists=savedList.find( savedListMovie => savedListMovie.id===movie.id )

    if( movieExists ) {return alert( "movie already exists" )}

    setSavedList( [...savedList, movie] )

  };

  const removeFromSavedList=movie => {
    setSavedList( savedList.filter( children => !children==movie ) );
    // let saveButton=document.querySelector( 'div.save-button' );
    //  saveButton.style.display="";
  }

  return (
    <div>

      <Route path="/movies/:movieID" render={( props ) => ( <>
        <SavedList
          {...props}
          list={savedList}
          removeFromSavedList={removeFromSavedList}
        />
        <Movie
          {...props}
          addToSavedList={addToSavedList}
          removeFromSavedList={removeFromSavedList}
          savedList={savedList}
        /></>
      )} />
      <div>
        <Route exact path="/" component={MovieList} />

      </div>
    </div>
  );
};

export default App;


