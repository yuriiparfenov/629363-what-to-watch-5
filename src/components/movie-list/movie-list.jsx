import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card";

export default class MovieList extends React.PureComponent {
  constructor() {
    super();
    this.state = {id: ``};
    this._handleOver = this._handleOver.bind(this);
  }

  _handleOver(evt) {
    this.setState({id: evt.target.id});
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => <MovieCard movie={film} key={i} onChangeState={this._handleOver}/>)}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
