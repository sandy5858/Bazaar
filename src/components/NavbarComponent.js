import React, { Component } from 'react';
import 'bootstrap/js/src/collapse';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-warning">
                    <NavLink className="navbar-brand" to="/" exact>
                        <img src={logo} alt="" style={{height:'30px'}} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact ><span className="fa fa-home fa-lg"></span><strong>Home</strong></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" exact ><span className="fa fa-list fa-lg"></span><strong>Products</strong></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart" exact ><span className="fa fa-cart-plus fa-lg"></span><strong>Cart</strong></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus" exact ><span className="fa fa-address-card fa-lg"></span><strong>Contact Us</strong></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
            </React.Fragment>
        );
    }
}
 
export default Navbar;