import React, {  } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import './CunsomersFeedBack.css'

const CunsomersFeedBack = () => {


    const [data,setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/FeedBack')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

        console.log({data})

    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-md-5 no-match text-center pb-5">
                        <h1>this place is awesome</h1>
                        <h2>{data.email}</h2>
                        <h2>{data.destinationName}</h2>
                        <h3>{data.FeedBack}</h3>
                        <div className="signuture text-right mr-5">
                            <h6>{data.name}</h6>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default CunsomersFeedBack;