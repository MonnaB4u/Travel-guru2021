import React, { useContext, useEffect, useState } from 'react';
import './TravelPlaceCard.css'

const TravelPlaceCard = (props) => {
    const { destination, image } = props.travel;
      return (
        <>
            <div className="col-md-4 float-left travel-card" onClick={() => props.viewDetailsHandler(props.travel)}>
                <img src={image} className="img-fluid travelImage" alt="Travel Place Pictures" />
                <h3 className="travelPlace">{destination}</h3>
            </div>

        </>
    );
};
export default TravelPlaceCard;