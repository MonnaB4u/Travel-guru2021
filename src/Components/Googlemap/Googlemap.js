import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Googlemap.css'
function Map() {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 39.059479, lng: -80.873016 }}>
        </GoogleMap>
    );
};
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Googlemap(props) {
    return (
        <div className="row maps">
            <div className="col-md-12 mt-3">
                <div className="" style={{ width: "100%", height: "100vh" }}>
                    <MapWrapped
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "90%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                    />
                </div>
            </div>
        </div>
    );
}