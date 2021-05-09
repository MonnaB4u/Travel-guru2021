import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const AddPlace = () => {
    
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/Destination', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Uploaded successfully");
                }
            })

    }

    return (
        <div className="row">
                        <AdminDashBoard></AdminDashBoard>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group" style={{ minWidth: '10px' }}>
                        <input type="text" ref={register({ required: true })} name="destination" placeholder="Destination Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="orijin" placeholder="Origin Name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="image" placeholder="Image Link" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="profile" placeholder="Profile Image Link" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea name="Description" placeholder="Enter Description" name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} placeholder="Project Details" ></textarea>
                    </div>
                      
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
                            <button type="submit" class="btn btn-warning">Send</button>
                        </div>

                </form>
         
        </div>
    );
};

export default AddPlace;