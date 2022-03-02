import React from 'react';
import Checkbox from '.';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

const onChangeMock = jest.fn();

describe('<Checkbox />', () => {
  it('checkbox is checked/unchecked', () => {
    const { getByTestId } = render(<Checkbox onChange={onChangeMock}/>);
    const checkbox = getByTestId('checkbox');
    
    expect(checkbox.checked).toEqual(false);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });
});
