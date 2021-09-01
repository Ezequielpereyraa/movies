import React from "react";
import TMDBImage from "../../../TMDBImage.js/TMDBImage";
import "./style.css";

const ExpandedMovieItem = ({
  movie: {
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
  },
}) => (
  <div className="expanded-movie-content">
    {poster_path && <TMDBImage src={poster_path} className="poster" />}
    <div className="description">
      <h2>{title && title}</h2>
      <h3> ({original_title && original_title})</h3>
      <hr />
      <span className="description__overview">{overview && overview}</span>
      <hr />
      <span>
        <b>Votes:</b>
        {vote_count && vote_count} - <b>Average:</b>
        {vote_average && vote_average}
      </span>
    </div>
  </div>
);

export default ExpandedMovieItem;
