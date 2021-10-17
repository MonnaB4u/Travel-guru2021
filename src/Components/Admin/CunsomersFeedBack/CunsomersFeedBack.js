import React, { } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import './CunsomersFeedBack.css'

const CunsomersFeedBack = () => {


    const [data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/FeedBack')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    console.log({ data })

    return (
        <div >
            <h1 className="mt-5">Customers Feed Back</h1>
            <div className="row ml-3 mt-5">
                {
                    data.map((each, index) =>
                        <>
                            {/* <div className="row d-flex  p-3"> */}
                            <div className="no-match text-center m-3">
                                <h4>{each.name}</h4>
                                <h5>{each.destinationName}</h5>
                                <p>{each.FeedBack}</p>
                                <div className="signuture text-right mr-5">
                                    <h5>{each.email}</h5>
                                </div>
                            </div>


                        </>
                    )
                }
            </div>

        </div>

    );
};

export default CunsomersFeedBack;