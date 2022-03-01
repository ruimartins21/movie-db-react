import React, { useEffect, useState } from 'react';

import YearIcon from '../../images/year-icon.png';
import ExpandableFilter from '../accordionfilter';
import SearchBar from '../../components/searchbar';
import MoreFilters from '../../images/filter-icon.png';
import SearchIcon from '../../images/search-icon-yellow.png';
import {
  Filter,
  OtherFilters,
  CategoryTitle,
  FiltersWrapper,
  SearchFiltersCont,
} from './styles';

const SearchFilters = ({ genres, ratings, languages, onSearch }) => {
  const [year, setYear] = useState(0);
  const [keyword, setKeyword] = useState(null);
  const [missingFields, setMissingFields] = useState(0);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const expandFilters = () => setShowMoreFilters(!showMoreFilters);

  useEffect(() => {
    if ((year.length > 0 && year.length < 4) || (!keyword && year.length === 4)) {
      setMissingFields(year);
    } else if (keyword != null) {
      setMissingFields(0);
      onSearch(keyword, year);
    }
  }, [keyword, year]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FiltersWrapper>
      <SearchFiltersCont
        className='search_inputs_cont'
        marginBottom
        visible={showMoreFilters}
      >
        <Filter>
          <SearchBar
            id='keyword_search_input'
            type='text'
            icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
            placeholder='Search for movies'
            visible={true}
            onChange={(e) => (e.trim() !== keyword ? setKeyword(e) : null)}
            errorMessage={
              missingFields.length > 3 && !keyword
                ? 'This field is required'
                : ''
            }
          />
          <OtherFilters
            src={MoreFilters}
            alt='More Filters'
            onClick={expandFilters}
          />
        </Filter>

        <SearchBar
          id='year_search_input'
          type='number'
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder='Year of release'
          visible={showMoreFilters}
          errorMessage={
            missingFields.length < 4 ? 'This field should have 4 digits.' : ''
          }
          onChange={setYear}
        />
      </SearchFiltersCont>
      {genres.length > 0 && (
        <SearchFiltersCont visible={showMoreFilters}>
          <CategoryTitle>Movies</CategoryTitle>
          <ExpandableFilter title='Select genre(s)' options={genres}></ExpandableFilter>
          <ExpandableFilter title='Select min. vote' options={ratings}></ExpandableFilter>
          <ExpandableFilter title='Select language' options={languages}></ExpandableFilter>
        </SearchFiltersCont>
      )}
    </FiltersWrapper>
  );
}

export default SearchFilters;