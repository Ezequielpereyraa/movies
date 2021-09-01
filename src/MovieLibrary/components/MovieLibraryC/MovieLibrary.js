import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchTopRatedMovies } from "../../store/actions";

import Logo from "../assets/Logo.svg";
import "./MovieLibrary.css";
import { getMovies } from "../../store/selectors";
import MoviesList from "../MovieList/MoviesList";

class MovieLibrary extends Component {
  static propTypes = {};
  state = {
    loader: false,
  };

  componentDidMount() {
    this.setState({ loader: true });
    const { fetchTopRatedMovies } = this.props;
    setTimeout(() => {
      fetchTopRatedMovies();
      this.setState({ loader: false });
    }, 2000);
  }

  render() {
    const { loader } = this.state;
    const { movies } = this.props;
    return (
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={Logo} alt="Logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        <div className="ML-intro">
          {loader && <h1>Load...</h1>}
          {movies && Boolean(movies.length) && <MoviesList movies={movies} />}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    movies: getMovies(state),
  }),
  { fetchTopRatedMovies }
)(MovieLibrary);
