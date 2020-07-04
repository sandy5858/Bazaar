import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    state = {}

    componentDidMount() {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        this.props.logout();
    }
    
    render() { 
        return <Redirect to="/" />;
    }
}
 
export default Logout;