import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
