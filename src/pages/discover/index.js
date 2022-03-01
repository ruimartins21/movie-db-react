import React, { lazy, Profiler, Suspense, useEffect, useState } from 'react';

import * as fetcher from '../../fetcher';
import { CONSTANTS } from '../../utils/constants';
import SearchFilters from '../../components/searchfilter';
import {
  getLocalStorage,
  onRenderCallback,
  debouncedFetchData,
} from '../../utils/helpers';
import {
  Loading,
  NoResults,
  TotalCount,
  MovieFilters,
  MovieResults,
  DiscoverWrapper,
  MobilePageTitle,
} from './styles';

const MovieList = lazy(() => import('../../components/movielist'));

const Discover = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);

  const fetchPopularMovies = () => {
    let localData = getLocalStorage();

    setResults(localData.popularMovies.results);
    setTotalCount(localData.popularMovies.total_results);
  };

  const getInitialData = async () => {
    setLoading(true);
    let localData = getLocalStorage();
    const now = new Date().getTime();

    if (now >= localData?.expiry || !localData) {
      try {
        let [popularMovies, genres] = await Promise.all([
          fetcher.getPopularMovies(),
          fetcher.getMoviesGenres(),
        ]);

        localData = {
          popularMovies: popularMovies.data,
          genres: genres.data,
          expiry: now + CONSTANTS.TEN_MINUTES,
        };

        localStorage.setItem(CONSTANTS.STORAGE, JSON.stringify(localData));

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    setResults(localData.popularMovies.results);
    setTotalCount(localData.popularMovies.total_results);
    setGenreOptions(localData.genres.genres);
    setLoading(false);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const searchMovies = (keyword, year) => {
    setLoading(true);

    if (!keyword && !year) {
      fetchPopularMovies();
      setLoading(false);
    } else {
      debouncedFetchData(keyword, year, (res) => {
        setResults(res.results);
        setTotalCount(res.total_results);
        setLoading(false);
      });
    }
  };

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>
      {totalCount > 0 && <TotalCount>{totalCount} results</TotalCount>}
      <Profiler id='MovieFilters' onRender={onRenderCallback}>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={CONSTANTS.RATING_OPTIONS}
            languages={CONSTANTS.LANGUAGE_OPTIONS}
            onSearch={(keyword, year) => searchMovies(keyword, year)}
          />
        </MovieFilters>
      </Profiler>

      {results.length === 0 && !loading && (
        <NoResults>Don't exist results.</NoResults>
      )}

      <Suspense fallback={<Loading className='loading' />}>
        {results.length > 0 && genreOptions.length > 0 && !loading && (
          <MovieResults>
            <Profiler id='MovieList' onRender={onRenderCallback}>
              <MovieList movies={results || []} genres={genreOptions || []} />
            </Profiler>
          </MovieResults>
        )}
      </Suspense>

      {loading && <Loading className='loading' />}
    </DiscoverWrapper>
  );
}


export default Discover;