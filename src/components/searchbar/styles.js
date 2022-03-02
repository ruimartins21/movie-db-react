import * as colors from '../../colors';
import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: ${colors.error};
  position: absolute;
  bottom: -18px;
  font-size: 0.7rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${colors.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: 0.8;
      color: ${colors.primaryColor};
      font-weight: 300;
    }
  }

  @media (max-width: 1024px) {
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
  }
`;
