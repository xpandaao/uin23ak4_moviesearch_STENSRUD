import MovieCard from "./moviecard";
import Search from './search'

export default function MovieCards({movies, setSearchBar}){
    return(
        <>
        <Search setSearchBar={setSearchBar} />
        <section className="movies-list">
            {movies.map((movie, index) => ( <MovieCard key={index} img={movie.Poster} title={movie.Title} year={movie.Year}
            gen={movie.Genre} dir={movie.Director} act={movie.Actors} imdbRating={movie.Rating} awards={movie.Awards} slug={movie?.movie?.label.replace(/\s/g, "-").toLowerCase()}/>))}
        </section>
        </>
    )
}