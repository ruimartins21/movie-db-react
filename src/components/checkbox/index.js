import React from 'react';

import { CheckboxCont } from './styles';

const Checkbox = ({ id, name, checked, label, onChange }) => {
  return (
    <CheckboxCont>
      <input
        type='checkbox'
        data-testid="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      ></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

export default Checkbox;