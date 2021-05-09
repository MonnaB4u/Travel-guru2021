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
import Payment from './Components/Payment/Payment';
import PaymentComplete from './Components/Payment/PaymentComplete';
import Admin from './Components/Admin/Admin';
import AddPlace from './Components/Admin/AddPlace/AddPlace';
import AddHotel from './Components/Admin/AddHotel/AddHotel';
import WatchfeedBack from './Components/Admin/WatchfeedBack/WatchfeedBack';
import Feedback from './Components/Admin/FeedBack/Feedback';
import CunsomersFeedBack from './Components/Admin/CunsomersFeedBack/CunsomersFeedBack';
import TourMain from './Components/TourGuide/TourMain/TourMain';


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
            
            <Route path="/feedback"> <Feedback></Feedback> </Route>
            <Route path="/payment"> <Payment></Payment> </Route>
            <Route path="/paymentsucess"> <PaymentComplete></PaymentComplete> </Route>
             <Route path="/admin"> <Admin></Admin> </Route>
             <Route path="/addHotel"> <AddHotel></AddHotel> </Route>
             <Route path="/addPlaces"> <AddPlace></AddPlace>  </Route>
             <Route path="/customerFeedback"> <WatchfeedBack></WatchfeedBack> </Route>
              {/* <Route path="/customerFeedback"> <CunsomersFeedBack></CunsomersFeedBack> </Route> */}
           <Route path="/tourguide"> <TourMain></TourMain> </Route>

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
