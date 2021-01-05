import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <section className="MovieList">
      {movies.map((movie) => (
        <MovieCard title={movie.title} picture={movie.picture} />
      ))}
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      picture: PropTypes.string,
    }),
  ).isRequired,
};

// MovieList.defaultProps = {
//   movies: [],
// };

export default MovieList;
