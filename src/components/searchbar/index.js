import React from 'react';
import { ErrorMessage, InputWrapper } from './styles';

const SearchBar = ({ icon, id, type, placeholder, visible, errorMessage, onChange }) => {
  return (
    <>
      <InputWrapper className='search_bar_wrapper' visible={visible}>
        <img src={icon.src} alt={icon.alt} htmlFor={id} width='25' />
        <input
          type={type}
          id={id}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputWrapper>
    </>
  );
};

export default SearchBar;
