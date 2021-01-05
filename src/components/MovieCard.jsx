import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ title, picture }) {
  return (
    <article className="MovieCard">
      <h3>{title}</h3>
      <img src={picture} alt={title} />
    </article>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default MovieCard;
