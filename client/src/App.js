import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';


const App=() => {

  const [savedList, setSavedList]=useState( [] );

  const addToSavedList=movie => {
    const movieExists=savedList.find( savedListMovie => savedListMovie.id===movie.id )
    movieExists? alert( "movie already exists" ):setSavedList( [...savedList, movie] )

  };

  const removeFromSavedList=movie => {
    const filteredList=savedList.filter( savedListMovie => savedListMovie.id!==movie.id )

    setSavedList( filteredList )
  }

  return (

    <>
      <SavedList removeFromSavedList={removeFromSavedList}savedList={savedList}/>
      <Route exact path="/" component={MovieList} />



      <Route path="/movies/:movieID" render={props => <Movie addToSavedList={addToSavedList} savedList={savedList}{...props}/>}/>

    </>
  );
};

export default App;


