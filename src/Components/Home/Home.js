import React, { useEffect, useState } from 'react';
import PlaceInfoData from '../../TravelGuruData/PlaceInfoData'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import TravelPlaceCard from '../TravelPlaceCard/TravelPlaceCard';
import './Home.css'
const Home = (props) => {
    // travel place view
    const sliceTravelPlace = PlaceInfoData.slice(0, 4);
    const [TravelPlace, setTravelPlace] = useState(sliceTravelPlace)

    // handle travel place details
    const [placeDetails, setPlaceDetails] = useState(sliceTravelPlace[0])
    const viewDetailsHandler = (place) => {
        setPlaceDetails(place);
    }
    return (
        <>
            <section className="home">
                <div className="container mt-5">
                    <div className="row align-items-center pt-5">
                        <div className="col-md-4">
                            <div className="placeDetails">
                                <PlaceDetails placeDetails={placeDetails}></PlaceDetails>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {
                                    TravelPlace.map(travelPlace => <TravelPlaceCard travel={travelPlace} key={TravelPlace.id} viewDetailsHandler={viewDetailsHandler}></TravelPlaceCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;