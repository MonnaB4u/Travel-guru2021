import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
const PlaceDetails = (props) => {
    const {destination, description, id} = props.placeDetails;
    return (
        <div>
            <h1 className="destination">{destination}</h1> <br/>
            <p>{description}</p>
            <Link to={`/destination/${id}`}><button className="booking-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
    );
};

export default PlaceDetails;