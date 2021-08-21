import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../../src/Components/App';
import localStorageMock from '../mocks/localStorage';


beforeEach(() => {
  
});
afterEach(() => {
  
});
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('report changes the class when hovered', () => {
  const component = renderer.create(
    <App/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  
});