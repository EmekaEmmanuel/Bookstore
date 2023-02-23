import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
