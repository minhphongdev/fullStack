import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import Products from './components/Products/Products';
import AddProducts from './components/AddProducts';
import Home from './components/Home/Home';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';
import reduxConfig from './redux';

const store = reduxConfig()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


);


