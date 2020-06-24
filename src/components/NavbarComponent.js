import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Navbar1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar dark color="warning">
                    <div className="container">
                        <NavbarBrand href="/">Bazaar</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
}
 
export default Navbar1;