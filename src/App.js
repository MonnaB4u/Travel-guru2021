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
import Login from './Components/Login/Login';
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

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
            <Route path="/sign">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment/:ID">
              <Shipment></Shipment>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
