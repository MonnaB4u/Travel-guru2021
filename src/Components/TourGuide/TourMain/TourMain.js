import React from 'react';
import TourGuide from '../TourGuide';

const TourMain = () => {
    return (
        <section className="doctors py-5">
        <div className="container">
            <h5 className="text-center  text-warning mb-5">Our Tour Guide</h5>
            <div className="row">
                <TourGuide></TourGuide>
                <TourGuide></TourGuide>
                <TourGuide></TourGuide>
            </div>
        </div>
    </section>
    );
};

export default TourMain;