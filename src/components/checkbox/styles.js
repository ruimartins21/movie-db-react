import * as colors from '../../colors';
import styled from 'styled-components';

export const CheckboxCont = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;

  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 20px;

    &:checked:before {
      background-color: ${colors.primaryColor};
    }

    &:hover {
      cursor: pointer;
    }
  }

  label {
    color: ${colors.fontColor};
    font-weight: 300;
  }

  &:hover,
  &:hover label {
    cursor: pointer;
    opacity: 0.7;
  }
`;
