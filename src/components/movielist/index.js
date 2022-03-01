import React from "react";

import MovieItem from '../movieitem';
import { MoviesWrapper } from "./styles";

const MovieList = ({ movies, genres }) => {
  const getGenders = (movie) => genres.filter((el) => movie.genre_ids.includes(el.id));

  return (
    <MoviesWrapper>
      { movies.map(movie => <MovieItem key={movie.id} movie={movie} genres={getGenders(movie)} />)}
    </MoviesWrapper>
  )
}

export default MovieList;
