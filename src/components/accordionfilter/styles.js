import * as colors from '../../colors';
import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  position: relative;
`;

export const ExpandedIcon = styled.div`
  margin-right: 20px;
  transition: transform 0.3s;
  width: 20px;
  height: 2px;
  transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(180deg)')};
  position: relative;

  &::before {
    content: '';
    display: block;
    width: ${({ active }) => (active ? '0' : '20px')};
    height: 0;
    border-bottom: solid 2px ${colors.fontColor};
    position: absolute;
    bottom: 0;
    transform: rotate(90deg);
    transition: width 0.3s;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 0;
    border-bottom: solid 2px ${colors.fontColor};
    position: absolute;
    bottom: 0;
  }
`;

export const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
`;

export const Title = styled.h3`
  display: inline-block;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.25rem;
`;

export const Content = styled.div`
  overflow: auto;
  transition: max-height 0.6s ease;
`;
