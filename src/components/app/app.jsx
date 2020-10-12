import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StartPage from "../start-page";
import Login from "../login";
import MyList from "../my-list";
import MoviePageId from "../movie-page-id";
import MoviePageReview from "../movie-page-review";
import MoviePage from "../movie-page";

const App = (props) => {
  const {movieTitle, movieJenre, movieDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartPage movieTitle={movieTitle}
            movieJenre={movieJenre}
            movieDate={movieDate}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePageId />
          <MoviePage />
        </Route>
        <Route exact path="/films/:id/review">
          <MoviePageReview />
          <MoviePage />
        </Route>
        <Route>
          <h2>Page NOt Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieJenre: PropTypes.string.isRequired,
  movieDate: PropTypes.number.isRequired
};

export default App;
