import React, { useContext } from 'react';
import { userContext } from '../../App';
import AdminDashBoard from './AdminDashBoard/AdminDashBoard';

const Admin = () => {

    const [loggedInUser] = useContext(userContext);

    return (
        <div className="row">
            <AdminDashBoard></AdminDashBoard>
            <div className="col-md-4 mt-5" >
                <h1>Hello {loggedInUser.displayName} </h1>
                <h2>WellCome to the admin Page </h2>
                <p>You can update the travel information, travel place . you can seen users feedback and you can update the hotel places also</p>
            </div>
        </div>
    );
};

export default Admin;