import { render } from "@testing-library/react";
import React from 'react';
import App from './app';

describe('<App />', () => {
  it('renders without crashing', () => {
    const result = render(<App />);

    expect(result).toBeTruthy();
  });
});
