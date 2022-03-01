export const CONSTANTS = {
  LANGUAGE_OPTIONS: [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' },
  ],
  RATING_OPTIONS: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ],
  ENDPOINTS: {
    POPULAR_MOVIES: '/movie/popular',
    MOVIES_GENRES: '/genre/movie/list',
    SEARCH_MOVIES: '/search/movie',
  },
  STORAGE: 'theMovieDB',
  MOVIE_DB_PATH: 'https://image.tmdb.org/t/p/w500',
  TEN_MINUTES: 600000
};
