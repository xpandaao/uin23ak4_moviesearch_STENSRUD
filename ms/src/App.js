import './css/main.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"
import MovieCards from './components/moviecards';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearchBar] = useState('');

  const getMovies = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&type=movie&plot=full&apikey=9b5050a3&=json`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      const moviesWithInfo = await Promise.all(
          responseJson.Search.map(async (movie) => {
            const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=9b5050a3&=json`;
            const movieResponse = await fetch(movieUrl);
            const movieResponseJson = await movieResponse.json();
            return { ...movie, ...movieResponseJson };
          })
      );
      setMovies(moviesWithInfo);
    }
  };

  useEffect(() => {
    if (!search) {
      getMovies('James Bond');
    } else {
      getMovies(search);
    }
  }, [search]);
  useEffect(() => { getMovies(search)}, [])
  console.log('movies:', movies)
  
  return (
    <div id="container">
      <header>
        <Link to="/">
          <h1>MSIMDB</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route index element={<MovieCards movies={movies} setSearchBar={setSearchBar} />} />
        </Routes>
      </main>
      <footer>

      </footer>
  </div>
  );
}

export default App;
