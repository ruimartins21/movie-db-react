import styled from 'styled-components';

export const ContentWrapper = styled.main`
  padding-left: 280px;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

export const PageContainer = styled.main`
  overflow-x: hidden;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
