import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import './Header.css'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from 'react';
import { userContext } from '../../App';
const Header = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return (

        <section className="header">
            <div>
                <Navbar bg="" expand="lg">
                   <Link to="/home"> <Navbar.Brand className="logo ml-4"><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col-md-5">
                            <div className="search-form">
                                <Grid container spacing={2} alignItems="flex-end">
                                    <Grid item>
                                        <SearchIcon />
                                    </Grid>
                                    <Grid item>
                                        <input className="input-field " id="input-with-icon-grid" placeholder="Search your destination" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <Nav className="ml-auto mr-5">
                            <Link to="/tourguide" className="nav-item ml-4 text-decoration-none">Tour guide</Link>
                            <Link to="/bookingTransport" className="nav-item ml-4 text-decoration-none">Buy Tickets</Link>
                            <Link to="/feedback" className="nav-item ml-4 text-decoration-none">Feedback</Link>
                            <Link to="/contact" className="nav-item ml-4 text-decoration-none">{loggedInUser.name}</Link>
                            <Link to="/login" className="login ml-4 text-decoration-none">Login</Link>
                            <Link to="/admin" className="login ml-4 text-decoration-none">Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </section>
    );
};

export default Header;