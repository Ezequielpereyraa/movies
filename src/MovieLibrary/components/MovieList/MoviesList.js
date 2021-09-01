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
    sortingByType: this.props.movies,
  };
  handleSelectMovie = (item) =>
    this.setState({ selectedMovie: item, isOpen: true });

  handleSortingChange = (sortingType) => {
    const moviesSort = [...this.state.sortingByType];
    switch (sortingType) {
      case "name_asc":
        this.setState({
          sortingByType: moviesSort.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          }),
        });
        break;
      case "name_desc":
        this.setState({
          sortingByType: moviesSort.sort((a, b) => {
            if (b.title < a.title) return -1;
            if (b.title > a.title) return 1;
            return 0;
          }),
        });
        break;
      case "rating":
        this.setState({
          sortingByType: moviesSort.sort((a, b) => b.popularity - a.popularity),
        });
        break;
      default:
        this.setState({ sortingByType: this.props.movies });
    }
  };

  handleModal = () => this.setState({ isOpen: false });

  render() {
    const { selectedMovie, isOpen, sortingByType } = this.state;
    return (
      <div className="movies-list">
        <SortingOptions onChange={this.handleSortingChange} />
        <div className="items">
          {sortingByType.map((movie) => (
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
