import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
export const PlaceContext = createContext();
function App() {
  const [defaultSelected, setDefaultSelected] = useState("Cox's Bazar")

  return (
    <PlaceContext.Provider value={[defaultSelected, setDefaultSelected]}>
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
          </Switch>
        </Router>
      </div>
    </PlaceContext.Provider>
  );
}

export default App;
