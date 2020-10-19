import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onChangeState} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" id={movie.title} onMouseOver={onChangeState}>
        <img src={movie.srcPicture} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onChangeState: PropTypes.func,
};

export default MovieCard;
