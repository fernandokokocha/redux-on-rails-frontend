import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);
