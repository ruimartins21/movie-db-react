import * as colors from '../../colors';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

export const SideNavMainLink = styled(Link)`
  ${SectionsStyles}
  font-weight: 300;

  &:hover,
  &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

export const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

export const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 300;
  padding: 25px 0 15px 35px;
`;

export const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.fontColor};
`;

export const NavLink = styled(Link)`
  display: block;
  color: ${colors.lightBackground};
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;
  font-weight: 300;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;

export const ArrowDown = styled.img`
  @media (max-width: 1024px) {
    display: none;
  }
`;
