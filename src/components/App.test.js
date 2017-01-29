import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('should not have state', () => {
  const app = shallow(
    <App />
  );

  expect(app.state()).toBe(null);
});
