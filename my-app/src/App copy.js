import AddProducts from './components/AddProducts';
import Products from './components/Products/Products';
import Nav from './components/Navigation/Nav';
import Weather from './components/weather/Wearther';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';



function App() {
  return (

    <div className="App">

      <div className="app-header">
        <Header />
      </div>

      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="weather" element={<AddProducts />} />
        </Routes>
      </div>

      <div className='app-footer'>
        <Footer />
      </div>


    </div>


  );
}

export default App;
