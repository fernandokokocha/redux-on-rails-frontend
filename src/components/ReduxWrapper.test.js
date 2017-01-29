import React from 'react';
import { shallow } from 'enzyme';
import ReduxWrapper from './ReduxWrapper';

test('can be created', () => {
  const app = shallow(
    <ReduxWrapper />
  );

  expect(app).toBeTruthy;
});
