import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import PlaceInfoData from '../../TravelGuruData/PlaceInfoData'
import HotelInfoData from '../../TravelGuruData/HotelInfoData'
import BookingHotels from '../BookingHotels/BookingHotels';

const Shipment = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { ID } = useParams();
    const travelPlace = PlaceInfoData.find(place => place.id.toString() === ID);
    const selectedHotel = HotelInfoData.filter(hotel => hotel.destination === travelPlace.destination)
    const [hotels, setHotels] = useState(selectedHotel);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3>{travelPlace.destination}</h3>
                        {
                            hotels.map(hotel => <BookingHotels hotel={hotel}></BookingHotels>)
                        }
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Shipment;