import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import moviesData from "./moviesData";
import AddMovie from "./Componants/AddMovie";
import Filter from "./Componants/Filter";
import MovieList from "./Componants/MovieList";
import MovieDetail from "./Componants/MovieDetail";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: movies.length + 1
    };
    setMovies([...movies, movieWithId]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="title">Movie Flow</h1>
                <div className="filter-container">
                  <Filter
                    setSearchTitle={setSearchTitle}
                    setSearchRating={setSearchRating}
                    searchRating={searchRating}
                  />
                  <AddMovie addMovie={addMovie} />
                </div>
                <MovieList
                  movies={movies}
                  searchTitle={searchTitle.toLowerCase()}
                  searchRating={searchRating}
                />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
