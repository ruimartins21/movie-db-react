import React from 'react';
import MovieItem from '.';
import "@testing-library/jest-dom";
import { genresMock, popularMoviesMock } from '../../mock';
import { render, screen, cleanup } from '@testing-library/react';
import { CONSTANTS } from '../../utils/constants';

afterEach(cleanup);

const movieMock = popularMoviesMock.results[0];

const path = CONSTANTS.MOVIE_DB_PATH;

describe('<MovieItem />', () => {
  it('movie appear with correct information', () => {
    const { getByTestId } = render(
      <MovieItem genres={genresMock.genres} movie={movieMock} />
    );
    const movie = getByTestId('movie');

    expect(movie).toBeTruthy();

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', path + movieMock.poster_path);
    expect(logo).toHaveAttribute('alt', movieMock.title);

    expect(screen.getByTestId('movie-title')).toHaveTextContent(movieMock.title);
    expect(screen.getByTestId('movie-description')).toHaveTextContent(movieMock.overview);
    expect(screen.getByTestId('movie-date')).toHaveTextContent(movieMock.release_date);
  });
});
