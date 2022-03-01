import axios from 'axios';
import { CONSTANTS } from './utils/constants';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getPopularMovies = async (page) => {
  const config = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const response = await api.get(CONSTANTS.ENDPOINTS.POPULAR_MOVIES, config);

    return response;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesGenres = async (page) => {
  const config = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const response = await api.get(CONSTANTS.ENDPOINTS.MOVIES_GENRES, config);

    return response;
  } catch (error) {
    console.error(error);
  }
};

const searchMovies = async (query, year, page) => {
  let config = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      query: query,
      page: page,
    },
  };

  if (year > 3) {
    config.params = Object.assign(config.params, { year: year });
  }

  try {
    const response = await api.get(CONSTANTS.ENDPOINTS.SEARCH_MOVIES, config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getPopularMovies, getMoviesGenres, searchMovies };
