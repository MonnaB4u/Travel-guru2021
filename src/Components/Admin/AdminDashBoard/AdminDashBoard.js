import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { userContext } from '../../../App';

const AdminDashBoard = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <div>
             <div  className='d-flex mt-4 mb-5 col-12'>

<div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
    {/* <Link to="/home">
        <img style={{ height: '50px', marginLeft: '35px' }} src={logo} alt="" />
    </Link> */}

  
    <div className='container mt-4 ml-3'>
 
    <Nav.Link href="addHotel">
    Update Hotel info</Nav.Link>  
   
    </div>
    

    <div className='container mt-2 ml-3'>
    <Nav.Link  href="addPlaces">  Update Place info</Nav.Link>  
    </div>

    <div className='container mt-2 ml-3'>
    <Nav.Link href="customerFeedback">  Watch users feedback</Nav.Link>  
    </div>

</div>

{/* <h4 style={{ width: '100%' }}  className='d-block pb-4 font-weight-bold pl-2'>Order  </h4> */}
<h5 className="d-flex justify-content-end" >{loggedInUser.name}</h5>

</div>
        </div>
    );
};

export default AdminDashBoard;