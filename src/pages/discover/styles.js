import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  padding: 35px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
`;

export const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);

  @media (max-width: 1024px) {
    width: 100%;
    order: 2;
  }
`;

export const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;

  @media (max-width: 1024px) {
    width: 100%;
    order: 0;
    margin-bottom: 30px;
  }
`;

export const MobilePageTitle = styled.h1`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding-left: 65px;
    font-weight: 400;
  }
`;

export const TotalCount = styled.strong`
  display: block;
  font-weight: 300;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const NoResults = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
