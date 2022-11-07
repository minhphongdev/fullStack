import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";

import {
  Routes,
  Route,
} from "react-router-dom";
import { Home, Login, Public } from './containers/public/';
import path from './utils/path';



function App() {


  return (

    <div className="App">

      <Routes>

        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.START} element={<Home />} />
        </Route>
      </Routes>


    </div>


  );
}

export default App;
