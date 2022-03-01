import React from 'react';
import { bool, func } from 'prop-types';

import { StyledHamburger } from './styles';

const Hamburger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  
  return (
    <StyledHamburger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} 
      onClick={() => setOpen(!open)} {...props} aria-controls="hamburger-menu">
      <span />
      <span />
      <span />
    </StyledHamburger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Hamburger;
