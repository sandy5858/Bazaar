import React, { Component } from 'react';
import logo from '../assets/logo.jpg';

class Shop extends Component {
    state = {  }
    render() {
        let body = null;
        if (!this.props.loading) {
            body = (
                this.props.categories.map(category =>
                    <div key={category.cat}>
                        <div id={category.cat}>
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
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
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
                <a href="#RICE" style={{ fontWeight: "bold", margin: "10px" }}>RICE</a>
                <a href="#DAL" style={{ fontWeight: "bold", margin: "10px" }}>DAL</a>
                {body}
            </div>
        );
    }
}
 
export default Shop;
