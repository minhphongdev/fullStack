import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import Products from './components/Products/Products';
import AddProducts from './components/AddProducts';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

);


