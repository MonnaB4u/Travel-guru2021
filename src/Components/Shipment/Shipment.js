import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import PlaceInfoData from '../../TravelGuruData/PlaceInfoData'
import HotelInfoData from '../../TravelGuruData/HotelInfoData'
import BookingHotels from '../BookingHotels/BookingHotels';
import Googlemap from '../Googlemap/Googlemap';
import './Shipment.css'
const Shipment = (props) => {

    // const [data, setData]= useState([])
    

    // useEffect(() => {

    //     fetch('http://localhost:5000/DestinationAll')
    //         .then(res => res.json())
    //         .then(data => setData(data))

    // }, [])


    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { ID } = useParams();
    const travelPlace = PlaceInfoData.find(place => place.id.toString() === ID);
    const selectedHotel = HotelInfoData.filter(hotel => hotel.id === travelPlace.id)
    const [hotels, setHotels] = useState(selectedHotel);
    console.log(loggedInUser);
    // destination
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7">
                        <div className="welcome m-4">

                            <h2>Hey, {loggedInUser.displayName}</h2>
                            <h3>Weolcome To {travelPlace.destination}</h3>
                            <p>Here some popular hotels are available</p>
                            {/* <div className="logout d-flex justify-content-end">
                                <button onClick={() => setLoggedInUser({})}>Sign out</button>
                            </div> */}
                        </div>
                        {
                            hotels.map(hotel => <BookingHotels hotel={hotel}></BookingHotels>)
                        }
                    </div>
                    <div className="col-md-5">
                        <Googlemap destination={travelPlace.destination}></Googlemap>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shipment;