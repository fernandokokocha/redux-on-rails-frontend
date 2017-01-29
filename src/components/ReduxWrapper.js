import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../redux/reducer';

import App from './App';

let store = createStore(reducer);

class ReduxWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ReduxWrapper;
