import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    state = { 
        form:{
            email: "",
            password: ""
        },
        loggedin: false,
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
        let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC79zHfpPVT7eLoKwSQePCdtix8RKIxPtM";
        let form = {
            ...this.state.form,
            returnSecureToken: true
        };
        axios.post(url, form)
            .then(response => {
                //console.log(response.data.refreshToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('user', response.data.email);
                this.setState({ loggedin: true, loading: false });
                this.props.checkAuthStatus();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() { 
        return (  
            <div className="container">
                {this.state.loggedin ? <Redirect to="/"/> : null}
                <h1>Login</h1>
                <form onSubmit={this.submitHandler}>
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
                    <NavLink to="/register" exact>Don't have an account?Create account</NavLink><br />
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
 
export default Login;