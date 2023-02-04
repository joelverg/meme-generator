import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { fetchMemes } from './actions/action';

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk));

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
  
  
);