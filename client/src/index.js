import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import SplashLanding from './containers/SplashLanding/SplashLanding';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <SplashLanding />
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
