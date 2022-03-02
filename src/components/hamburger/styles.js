import styled from 'styled-components';

export const StyledHamburger = styled.button`
  position: absolute;
  top: ${({ open }) => open ? '3.5%' : '3.8%'};
  left: ${({ open }) => open ? '13.7rem' : '2rem'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.2rem;
  height: 2.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  visibility: hidden;
  opacity: 0;

  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }

  span {
    width: 2.2rem;
    height: 0.185rem;
    background: ${({ open }) => open ? '#fff' : '#000'};
    border-radius: 20px;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
