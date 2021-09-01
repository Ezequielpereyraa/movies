import React from "react";
import PropTypes from "prop-types";
const TMDB_IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const TMDBImage = ({ src, ...restProps }) => (
  <img src={`${TMDB_IMAGE_BASE_PATH}${src}`} {...restProps} />
);

export default TMDBImage;
