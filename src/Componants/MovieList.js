import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchTitle, searchRating }) => {
  return (
    <div className="movie-list">
      {movies
        .filter((movie) => {
          if (searchRating === 0) return true;
          // Créer un intervalle de ±0.3 autour du rating sélectionné
          const minRating = searchRating - 0.3;
          const maxRating = searchRating + 0.3;
          return movie.rating >= minRating && movie.rating <= maxRating;
        })
        .filter((movie) => movie.title.toLowerCase().includes(searchTitle))
        .map((movie, index) => (
          <MovieCard {...movie} key={index} />
        ))}
    </div>
  );
};

export default MovieList;
