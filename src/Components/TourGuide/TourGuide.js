import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './TourGuide.css'
const TourGuide = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/guideall')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    const history = useHistory();

    const paysucess=()=>{
        history.push('/payment')
        alert('are you sure?')
    }

    console.log({ data })
    return (
        // <div className="col-md-4 text-center">
        //     <img className="img-fluid mb-3" src='https://www.myproguide.com/assets/img/partner/MPG-operator-tour-guide-200x200.png' alt="" />
        //     <h4>MR. Tour Guide</h4>
        //     <p>  +880-1863574388</p>
        //     <div className="form-group text-centet ml-0 mt-5">
        //     <button type="submit" class="btn">Send</button>
        //     </div>
        // </div>
        <div >

            <div className="row ml-3 mt-5">
                {
                    data.map((each, index) =>
                        <>
                            <div className="no-match text-center m-3">
                                <img className="img-fluid  tourguideImage" src={each.img} alt="" />
                                <h4>Name: {each.name}</h4>
                                <h5>Contact: {each.number}</h5>
                                <p>Place: {each.destiName}</p>
                                <p> $: {each.price} Per Hour</p>
                                <div className="signuture text-right mr-5 text-centet">
                                    <button onClick={()=>paysucess()} type="submit" class="btn btn-warning">Hire Me</button>
                                </div>
                                {/* <div className="form-group text-centet ml-0 mt-5 signuture">
                                    <button type="submit" class="btn btn-warning">Send</button>
                                </div> */}
                            </div>


                        </>
                    )
                }
            </div>

        </div>
    );
};

export default TourGuide;