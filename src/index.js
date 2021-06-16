import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CounterApp } from './CounterApp';
import { store } from './store/store';

ReactDOM.render(
  <Provider store = {store}>
  <CounterApp/>
 
  </Provider>,
 
  document.getElementById('root')
);


