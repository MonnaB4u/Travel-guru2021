import React from 'react';
import { useForm } from 'react-hook-form';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import './AddHote.css'

const AddHotel = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/Hotel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert("Thanks for Review");
            }
        })
    }

    return (
        <div className="row">

          
           <AdminDashBoard></AdminDashBoard>
          
          
             <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                 <h1>Add New Hotel</h1>
                    <div className="form-group" style={{ minWidth: '10px' }}>
                        <input type="text" ref={register({ required: true })} name="destination" placeholder="Hotel Destination Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="origin" placeholder="Hotel Origin Name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Hotel Name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="image" placeholder="Image Link" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="bed" placeholder="How many bed?" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="bathroom" placeholder="How many bedroom" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="bath" placeholder="How many bath" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="guests" placeholder="How many guests" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="cancel" placeholder="How many cancel" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="price" placeholder="Price" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="oppertunity" placeholder="Opportunity" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>

                    {/* <div className="form-group">
                        <textarea name="Description" placeholder="Enter Description" name="Hotel description" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} placeholder="Project Details" ></textarea>
                    </div> */}
                      
                      <div  className="row d-flex justify-content-between">
                  

                   
                    {/* <div className='col-md-5 px-0 mb-2'>
                            <div className="button-wrapper">
                                <span className="label">
                                    <img src={icon} alt="upload-icon" /> Upload project File
                                </span>
                                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" />
                            </div>
                        </div> */}
                       
                        <br />
                    
                        </div>
                        <div className="form-group text-centet ml-0 mt-5">
                            <button type="submit" class="btn booking-btn">Send</button>
                        </div>

                </form>
        </div>
    );
};

export default AddHotel;