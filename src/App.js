import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UserLogin from './Components/UserLogin/UserLogin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Googlemap from './Components/Googlemap/Googlemap';
import NoMatch from './Components/NoMatch/NoMatch';
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    password: "",
    email: "",
  })

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="Travel-guru">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/destination/:placeID">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <UserLogin></UserLogin>
            </Route>
            <PrivateRoute path="/shipment/:ID">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
