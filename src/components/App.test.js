import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('should have initial state', () => {
  const app = shallow(
    <App />
  );

  expect(app.state()).toEqual({ tab: 1 });
});
