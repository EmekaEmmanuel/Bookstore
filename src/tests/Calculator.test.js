import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
