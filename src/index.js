import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const movieData = {
  movieTitle: `The Grand Budapest Hotel`,
  movieJenre: `Drama`,
  movieDate: 2014
};

ReactDOM.render(
    <App movieTitle={movieData.movieTitle}
      movieJenre={movieData.movieJenre}
      movieDate={movieData.movieDate}
    />,
    document.querySelector(`#root`)
);
