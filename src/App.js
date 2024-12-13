import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import moviesData from "./moviesData";
import AddMovie from "./Componants/AddMovie";
import Filter from "./Componants/Filter";
import MovieList from "./Componants/MovieList";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1 className="title"> Movie Flow</h1>
      <div className="filter-container">
        <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
      </div>
      <AddMovie addMovie={addMovie} />
      <MovieList
        movies={movies}
        searchTitle={searchTitle.toLowerCase()}
        searchRating={searchRating}
      />
    </div>
  );
}

export default App;
