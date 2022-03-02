import * as colors from '../../colors';
import styled, { css } from 'styled-components';

export const FiltersWrapper = styled.div`
  position: relative;
`;

export const Filter = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}

  @media (max-width: 1024px) {
    margin-bottom: 0;

    &:first-of-type {
      background-color: transparent;
      padding: 0 0 20px 0;
    }

    &:not(:first-of-type) {
      display: ${({ visible }) => (visible ? 'block' : 'none')};
    }
  }
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;

export const OtherFilters = styled.img`
  margin: 0 0 15px 15px;
  padding: 6px 2px;
  display: none;
  border-bottom: 2px solid ${colors.primaryColor};
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;
