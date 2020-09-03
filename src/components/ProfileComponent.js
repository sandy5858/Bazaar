import React, { Component } from 'react';

class Profile extends Component {
    state = {  }
    render() { 
        let user = null;
        if (this.props.user !== null) {
            user = <div>
                <h1>{this.props.user.fname} {this.props.user.lname}</h1>
                <br />
                <i className="fa fa-map-marker fa-lg"></i><strong>HOME ADDRESS : </strong>{this.props.user.address}
                <br /><br />
                <i className="fa fa-phone fa-lg"></i><strong>PHONE : </strong>{this.props.user.phone}
                <br /><br />
                <i className="fa fa-envelope fa-lg"></i><strong>MAIL : </strong>{this.props.user.email}
            </div>
        }
        return (  
            <div className="container">
                {user}
            </div>
        );
    }
}
 
export default Profile;