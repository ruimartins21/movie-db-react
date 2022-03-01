import * as colors from '../../colors';
import styled from 'styled-components';

export const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

export const Img = styled.img`
  display: inline-block;
  width: 150px;

  @media (max-width: 1024px) {
    width: 115px;
  }
`;

export const RightCont = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin: 0 5px 4px 0;
  width: 90%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    margin-bottom: 0;
    font-size: 1.4rem;
  }
`;

export const Rating = styled.div`
  background-color: ${colors.primaryColor};
  height: 28px;
  width: 36px;
  line-height: 30px;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  opacity: 0.75;
`;

export const LabelsWrapper = styled.span`
  display: flex;
`;

export const Label = styled.span`
  font-size: 0.925rem;
  color: ${colors.primaryColor};
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

export const Divider = styled.span`
  margin: 0 3px;
  color: ${colors.primaryColor};
`;

export const Description = styled.div`
  margin-top: 10px;
  text-align: left;
  height: 95px;
  max-height: 95px;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 70%);
    position: absolute;
    right: 0;
    top: 5.5em;
    width: 50%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    height: 90px;
    margin-top: 5px;
    margin-bottom: 13px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.9rem;
    height: 85px;
    margin-bottom: 17px;
  }
`;

export const Date = styled.div`
  display: flex;
  color: ${colors.primaryColor};
  opacity: 0.5;

  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;
