import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ExpandedMovieItem from "./components/ExpandedMovieItem";
import SortingOptions from "./components/SortingOptions";
import MovieListItem from "./components/MovieItem";
import "./MoviesList.css";

export default class MoviesList extends PureComponent {
  state = {
    selectedMovie: null,
    isOpen: false,
    sort: this.props.movies,
  };
  handleSelectMovie = (item) =>
    this.setState({ selectedMovie: item, isOpen: true });

  handleSortingChange = (sortingType) => {
    console.log({ sortingType });
    const moviesSort = [...this.state.sort];
    switch (sortingType) {
      case "name_asc":
        this.setState({
          sort: moviesSort.sort(),
        });
        break;
      case "name_desc":
        this.setState({
          sort: moviesSort.sort().reverse(),
        });
        break;
      case "rating":
        this.setState({
          sort: moviesSort.sort((a, b) => b.popularity - a.popularity),
        });
        break;
      default:
        this.setState({ sort: moviesSort });
    }
  };

  handleModal = () => this.setState({ isOpen: false });

  render() {
    const { movies } = this.props;
    const { selectedMovie, isOpen, sort } = this.state;
    console.log({ movies });
    return (
      <div className="movies-list">
        <SortingOptions onChange={this.handleSortingChange} />
        <div className="items">
          {sort.map((movie) => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              isSelected={selectedMovie === movie}
              onSelect={this.handleSelectMovie}
            />
          ))}
        </div>
        {isOpen && selectedMovie && (
          <div className="expanded-movie-item">
            <span onClick={this.handleModal} class="expandend-movie-close">
              &times;
            </span>
            <ExpandedMovieItem movie={selectedMovie} />
          </div>
        )}
      </div>
    );
  }
}
