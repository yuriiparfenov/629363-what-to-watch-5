import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StartPage from "../start-page";
import Login from "../login";
import MyList from "../my-list";
import MoviePageId from "../movie-page-id";
import MoviePageReview from "../movie-page-review";
import MoviePage from "../movie-page";
import AddReview from "../add-review";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartPage movies={films}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList myListFilms={films}/>
        </Route>
        <Route exact path="/films/:id?">
          <MoviePageId moviesArray={films}/>
          <MoviePage filmsPage={films}/>
        </Route>
        <Route exact path="/films/:id/review">
          <MoviePageReview />
          <MoviePage filmsPage={films}/>
        </Route>
        <Route exact path="/films/:id/reviewadd">
          <AddReview />
        </Route>
        <Route>
          <h2>Page NOt Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runTime: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    srcVideo: PropTypes.string.isRequired,
    srcPicture: PropTypes.string.isRequired,
  })),
};

export default App;
