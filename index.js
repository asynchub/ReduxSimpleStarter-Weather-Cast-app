import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// middleware is function, sort of gatekeeper
// middleware takes the action and depending on actions title or payload
// chooses the action to pass through, manipulate, console.log or stop
// before action reach any reducer.
// all the actions that we create flow through middleware
// and middleware can modify actions
// unlimited middleware functions can be applied
// import ReduxPromise middleware
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// hook up the middleware as an argument of 1st call of function applyMiddleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
