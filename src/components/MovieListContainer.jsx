import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

function MovieListContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/api/movies`).then((res) => setMovies(res.data));
    // return () => {
    //   cleanup
    // }
  }, []);

  return <MovieList movies={movies} />;
}

export default MovieListContainer;
