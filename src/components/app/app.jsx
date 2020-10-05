import React from "react";
import PropTypes from "prop-types";
import StartPage from "../start-page";

const App = (props) => {
  const {movieTitle, movieJenre, movieDate} = props;

  return (
    <React.Fragment>
      <StartPage movieTitle={movieTitle}
        movieJenre={movieJenre}
        movieDate={movieDate}/>
    </React.Fragment>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieJenre: PropTypes.string.isRequired,
  movieDate: PropTypes.number.isRequired
};

export default App;
