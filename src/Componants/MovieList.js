import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchTitle = "", searchRating = 0 }) => {
  const filteredMovies = movies
    .filter((movie) => {
      if (searchRating === 0) return true;
      const movieRating = Math.round(movie.rating);
      return movieRating === searchRating;
    })
    .filter((movie) => 
      movie.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

  return (
    <div className="movie-list" style={{display: 'flex', flexWrap:'wrap', justifyContent: "space-around"}}>
      {filteredMovies.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          width: '100%', 
          padding: '20px',
          color: '#666'
        }}>
          No movies found matching your criteria
        </div>
      ) : (
        filteredMovies.map((movie) => (
          <Link 
            to={`/movie/${movie.id}`} 
            key={movie.id} 
            className="movie-link"
            state={{ movies: movies }}
          >
            <MovieCard {...movie} />
          </Link>
        ))
      )}
    </div>
  );
};

export default MovieList;
