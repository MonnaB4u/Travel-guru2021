import React from 'react';
import { useForm } from 'react-hook-form';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const AddTransport = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/transport', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Thanks for Review");
                }
            })
    }


    return (
        <div className="row">


            <AdminDashBoard></AdminDashBoard>


            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h1>Add New Transport</h1>
                <div className="form-group" style={{ minWidth: '10px' }}>
                    <input type="text" ref={register({ required: true })} name="id" placeholder="Input Id" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group" style={{ minWidth: '10px' }}>
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Input Transport Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                < div className="form-group" style={{ minWidth: '10px' }}>
                    <input type="number" ref={register({ required: true })} name="price" placeholder="Input Price" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>

                < div className="form-group" style={{ minWidth: '10px' }}>
                    <input type="text" ref={register({ required: true })} name="image" placeholder="Input Image Link" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group text-centet ml-0 mt-5">
                    <button type="submit" class="btn booking-btn">Send</button>
                </div>

            </form>
        </div>
    );
};

export default AddTransport;