import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    state = {
        form:{
            fname: "",
            lname: "",
            address: "",
            email: "",
            phone: "",
            password: ""
        },
        registered: false,
        loading: false
    }

    handleChange = (event) => {
        let form = { ...this.state.form };
        form[event.target.name] = event.target.value;
        this.setState({ form: form });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        let signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC79zHfpPVT7eLoKwSQePCdtix8RKIxPtM";
        let authData = {
            email: this.state.form.email,
            password: this.state.form.password,
            returnSecureToken: true
        }
        axios.post(signupUrl, authData)
            .then(response => {
                let url = "https://bazaar-87064.firebaseio.com/Users.json";
                let userData = {
                    fname: this.state.form.fname,
                    lname: this.state.form.lname,
                    address: this.state.form.address,
                    email: this.state.form.email,
                    phone: this.state.form.phone
                }
                axios.post(url, userData)
                    .then(res => {
                        this.setState({ registered: true, loading: false });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() { 
        return ( 
            <div className="container">
                {this.state.registered ? <Redirect to="/login" /> : null}
                <h1>Register</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                name="fname"
                                value={this.state.form.fname}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                name="lname"
                                value={this.state.form.lname}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="address"
                            value={this.state.form.address}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={this.handleChange}
                                name="email"
                                value={this.state.form.email}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Phone No.</label>
                            <input
                                type="tel"
                                pattern="[0-9]{10}"
                                className="form-control"
                                onChange={this.handleChange}
                                name="phone"
                                value={this.state.form.phone}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Password (min 6 characters)</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={this.handleChange}
                                name="password"
                                value={this.state.form.password}
                                required
                            />
                        </div>
                    </div>
                    {
                        this.state.loading
                            ? <div className="spinner-border text-success" role="status">
                                <span className="sr-only">
                                    Loading...
                                </span>
                            </div>
                            : <button className="btn btn-success">Submit</button>
                    }
                </form>
            </div>
        );
    }
}
 
export default Register;
