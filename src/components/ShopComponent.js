import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

class Shop extends Component {
    state = {  }
    render() {
        let body = null;
        if (!this.props.loading) {
            body = (
                this.props.categories.map(category =>
                    <div key={category.cat}>
                        <div id={category.cat}>
                            <br />
                            <br />
                            <br />
                            <h1>
                                {category.cat}
                            </h1>
                        </div>
                        <div className="row">
                            {category.items.map(item =>
                                <div key={item.key} className="card my-2" style={{ width: "15rem", margin: "auto" }}>
                                    <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.key}</h5><h5>Rs.{item.MRP}</h5>
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => this.props.sub(category, item)}
                                        >
                                            <strong>-</strong>
                                        </button>
                                        <strong>{item.amt}</strong>
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => this.props.add(category, item)}
                                        >
                                            <strong>+</strong>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            );
        }
        return (
            <div className="container">
                <div style={{ position: "fixed", bottom: "5%", right: "0" }}>
                    <a href="#TOP" className="btn btn-danger"><strong>TOP</strong></a>
                </div>
                <div style={{ position: "fixed", bottom: "15%", right: "0" }}>
                    <NavLink to="/cart" exact className="btn btn-outline-success">
                        <strong>CART</strong>
                        <br />
                        {this.props.total_items !== 0
                            ? <span className="badge badge-primary"><strong>{this.props.total_items}</strong></span>
                            : null
                        }
                    </NavLink>
                </div>
                <div id="TOP"><br /><br /><br /></div>
                <a href="#RICE" className="btn btn-outline-secondary mx-2" style={{ fontWeight: "bold" }}>RICE</a>
                <a href="#DAL" className="btn btn-outline-secondary mx-2" style={{ fontWeight: "bold" }}>DAL</a>
                <a href="#ATTA(FLOUR)" className="btn btn-outline-secondary mx-2" style={{ fontWeight: "bold" }}>ATTA(FLOUR)</a>
                <a href="#SPICES" className="btn btn-outline-secondary mx-2" style={{ fontWeight: "bold" }}>SPICES</a>
                {body}
            </div>
        );
    }
}
 
export default Shop;
