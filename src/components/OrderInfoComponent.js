import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class OrderInfo extends Component {
    state = { 
        form: {
            phone: this.props.user.phone,
            address: this.props.user.address
        },
        otherPhone: false,
        otherAddress: false,
        loading: false,
        redirect: false
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ redirect: true });
    }

    handleChange = (event) => {
        if (event.target.name === "phone1") {
            //console.log(event.target.value);
            if (event.target.value === "otherPhone") {
                let form = { ...this.state.form };
                form["phone"] = "";
                this.setState({ otherPhone: true, form: form });
            }
            if (event.target.value === "defaultPhone"){
                let form = { ...this.state.form };
                form["phone"] = this.props.user.phone;
                this.setState({ otherPhone: false, form: form });
            }
            return;
        }
        if (event.target.name === "address1") {
            //console.log(event.target.value);
            if (event.target.value === "otherAddress") {
                let form = { ...this.state.form };
                form["address"] = "";
                this.setState({ otherAddress: true, form: form });
            }
            if (event.target.value === "defaultAddress"){
                let form = { ...this.state.form };
                form["address"] = this.props.user.address;
                this.setState({ otherAddress: false, form: form });
            }
            return;
        }
        let form = { ...this.state.form };
        form[event.target.name] = event.target.value;
        this.setState({ form: form });
    }

    render() { 
        return ( 
            <div className="container">
                {
                    this.state.redirect
                        ? <Redirect to={{
                            pathname: '/confirm-order',
                            state: {
                                email:this.props.user.email,
                                phone:this.state.form.phone,
                                address:this.state.form.address
                            }
                        }} />
                        :null
                }
                <div>
                    {this.props.total_items !== 0
                        ? <strong>
                            <h1>ORDER INFO</h1>
                            <hr />
                            <i className="fa fa-envelope fa-lg"></i><strong>MAIL : </strong>{this.props.user.email}
                            <br /><br />
                            <form onSubmit={this.submitHandler}>
                                <i className="fa fa-phone fa-lg"></i><strong>PHONE : </strong>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="phone1"
                                        value="defaultPhone"
                                        onChange={this.handleChange}
                                        checked={!this.state.otherPhone}
                                    />    
                                    <label className="form-check-label">
                                        {this.props.user.phone}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="phone1"
                                        value="otherPhone"
                                        onChange={this.handleChange}
                                        checked={this.state.otherPhone}
                                    />
                                    <label className="form-check-label">
                                        Other Phone Number
                                    </label>
                                    {
                                        this.state.otherPhone
                                            ? <input
                                                type="tel"
                                                pattern="[0-9]{10}"
                                                className="form-control"
                                                style={{width:"200px"}}
                                                onChange={this.handleChange}
                                                name="phone"
                                                value={this.state.form.phone}
                                                required
                                            />
                                            : null
                                    }
                                </div>
                                <br />
                                <i className="fa fa-map-marker fa-lg"></i><strong>ADDRESS : </strong>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="address1"
                                        value="defaultAddress"
                                        onChange={this.handleChange}
                                        checked={!this.state.otherAddress}
                                    />    
                                    <label className="form-check-label">
                                        {this.props.user.address}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="address1"
                                        value="otherAddress"
                                        onChange={this.handleChange}
                                        checked={this.state.otherAddress}
                                    />
                                    <label className="form-check-label">
                                        Other Address
                                    </label>
                                    {
                                        this.state.otherAddress
                                            ? <input
                                                type="text"
                                                className="form-control"
                                                onChange={this.handleChange}
                                                name="address"
                                                value={this.state.form.address}
                                                required
                                            />
                                            : null
                                    }
                                </div>
                                <br />
                                <i className="fa fa-money fa-lg"></i><strong>PAYMENT METHOD : </strong>COD
                                <br /><br />
                                {
                                    this.state.loading
                                        ? <div className="spinner-border text-success" role="status">
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        : <button className="btn btn-success">Continue</button>
                                }
                            </form>
                        </strong>
                        : <h1>YOUR SHOPPING CART IS EMPTY</h1>}
                </div>
            </div>
        );
    }
}
 
export default OrderInfo;