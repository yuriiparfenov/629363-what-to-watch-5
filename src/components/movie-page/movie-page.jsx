import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card";

const MoviePage = (props) => {
  const {filmsPage} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <MovieCard movie={filmsPage[0]} />
          <MovieCard movie={filmsPage[1]} />
          <MovieCard movie={filmsPage[2]} />
          <MovieCard movie={filmsPage[4]} />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MoviePage.propTypes = {
  filmsPage: PropTypes.array.isRequired,
};

export default MoviePage;
