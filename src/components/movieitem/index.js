import React from 'react';

import NO_IMAGE from '../../images/no-image.png';
import { CONSTANTS } from '../../utils/constants';
import {
  Img,
  Date,
  Label,
  Title,
  Rating,
  Divider,
  LeftCont,
  RightCont,
  Description,
  TitleWrapper,
  LabelsWrapper,
  MovieItemWrapper,
} from './styles';

const MovieItem = ({ movie, genres }) => {
  const path =
    movie.poster_path != null ? `${CONSTANTS.MOVIE_DB_PATH}${movie.poster_path}` : NO_IMAGE;

  return (
    <MovieItemWrapper data-testid="movie">
      <LeftCont>
        <Img src={path} alt={movie.title} />
      </LeftCont>
      <RightCont>
        <TitleWrapper>
          <Title data-testid="movie-title">{movie.title}</Title>
          <Rating>{movie.vote_average}</Rating>
        </TitleWrapper>
        <LabelsWrapper>
          {genres.map((genre, index) => (
            <div key={genre.id}>
              <Label>{genre.name}</Label>
              {index < genres.length - 1 && <Divider>|</Divider>}
            </div>
          ))}
        </LabelsWrapper>
        <Description data-testid="movie-description">{movie.overview}</Description>
        <Date data-testid="movie-date">{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

export default MovieItem;
