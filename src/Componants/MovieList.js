import MovieCard from "./MovieCard";

const MovieList = ({movies, searchTitle, searchRating}) => {
    return (
        <div style={{display: 'flex', flexWrap:'wrap', justifyContent: "space-around"}}>
        {movies
        .filter((el)=> {
            if (searchRating === 0) return true;
            return Math.floor(el.rating) === Math.floor(searchRating);
        })
        .filter((el)=> el.title.toLowerCase().includes(searchTitle))
        .map((el, index)=> <MovieCard {...el} key={index}/>)}
        </div>
    )
}

export default MovieList;
