import React from 'react';
import './BookingHotels.css'
const BookingHotels = (props) => {
    console.log(props.hotel)
    const { destination, name, guests, image, origin, bed, bedrooms, bath, cancel, price, oppertunity } = props.hotel;
    return (
        <>
            <div className="row m-3 hotels">
                <div className="col-md-6">
                    <img src={image} className="w-100 img-fluid" alt="" />
                </div>
                <div className="col-md-6">
                    <h4>{name}</h4>
                    <div className="room-details d-flex justify-content-between">
                        <span>{guests} guests</span>
                        <span>{bedrooms} Bedrooms</span>
                        <span>{bed} Beds</span>
                        <span>{bath} Bats</span>
                    </div>
                    <p>{oppertunity}</p>
                    <p>{cancel}</p>
                    <div className="rate-price">
                        <span>${price}/per-night</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingHotels;