import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../App.css';

const MovieDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const movies = location.state?.movies || [];
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail">
        <Link to="/" className="back-button">← Back to Home</Link>
        <div>Movie not found</div>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="movie-detail-content">
        <h1>{movie.title}</h1>
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <p className="movie-description">{movie.description}</p>
        <div className="movie-rating">Rating: {movie.rating}/5</div>
        {movie.trailerURL && (
          <div className="movie-trailer">
            <h2>Trailer</h2>
            <iframe
              width="560"
              height="315"
              src={movie.trailerURL}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
