import React, { Component } from "react";
import classNames from "classnames";
import TMDBImage from "../../../TMDBImage.js/TMDBImage";
import "./style.css";

class MovieListItem extends Component {
  handleClick = () => {
    const { movie, onSelect } = this.props;
    onSelect(movie);
  };

  render() {
    const {
      movie: { poster_path, title },
      isSelected,
    } = this.props;
    return (
      <div
        className={classNames("movie-list-item", { selected: isSelected })}
        onClick={this.handleClick}
      >
        {poster_path && (
          <TMDBImage src={poster_path} className="poster" alt={title} />
        )}
      </div>
    );
  }
}

export default MovieListItem;
