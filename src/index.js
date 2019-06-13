import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

 ReactDOM.render(
    <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
  );
  