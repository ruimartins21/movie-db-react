import React, { useRef, useState } from 'react';

import Hamburger from '../hamburger';
import Arrow from '../../images/arrow-icon.png';
import { useOnClickOutside } from '../../hooks';
import SearchWhite from '../../images/search-icon-white.png';
import {
  NavLink,
  ArrowDown,
  HeaderText,
  SideNavHeader,
  SideNavBarCont,
  SideNavMainLink,
  SideNavSectionTitle,
} from './styles';

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <div ref={node}>
      <Hamburger open={isOpen} setOpen={setIsOpen} />
      <SideNavBarCont open={isOpen}>
        <SideNavHeader>
          Wesley
          <ArrowDown src={Arrow} alt='Arrow pointing down' />
        </SideNavHeader>
        <SideNavMainLink to='/discover' exact className={'active'}>
          Discover
          <img src={SearchWhite} alt='Magnifying glass' />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to='/watched/movies'>Movies</NavLink>
        <NavLink to='/watched/tv-shows'>TV Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to='/saved/movies'>Movies</NavLink>
        <NavLink to='/saved/tv-shows'>TV Shows</NavLink>
      </SideNavBarCont>
    </div>
  );
}

export default SideNavBar;