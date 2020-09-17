import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import './Header.css'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from 'react';
import { userContext } from '../../App';
const Header = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return (

        <section className="header">
            <div className="container">
                <Navbar bg="" expand="lg">
                   <Link to="/home"> <Navbar.Brand className="logo"><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col-md-5">
                            <div className="search-form">
                                <Grid container spacing={2} alignItems="flex-end">
                                    <Grid item>
                                        <SearchIcon />
                                    </Grid>
                                    <Grid item>
                                        <input className="input-field" id="input-with-icon-grid" placeholder="Search your destination" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <Nav className="ml-auto mr-5">
                            <Link to="/news" className="nav-item ml-4 text-decoration-none">News</Link>
                            <Link to="/destination" className="nav-item ml-4 text-decoration-none">Destination</Link>
                            <Link to="/blog" className="nav-item ml-4 text-decoration-none">Blog</Link>
                            <Link to="/contact" className="nav-item ml-4 text-decoration-none">Contact</Link>
                            <Link to="/login" className="login ml-4 text-decoration-none">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </section>
    );
};

export default Header;