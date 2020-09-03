import React, { Component } from 'react';

class ConfirmOrder extends Component {
    state = {  }
    render() {
        let body = null;
        if (!this.props.loading) {
            body = (
                this.props.categories.map(category => {
                    return (
                        category.items.map(item =>
                            item.amt!==0
                                ? <li key={item.key} className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                                    <div>
                                        {item.key} x {item.amt}
                                    </div>
                                    <span className="badge badge-primary badge-pill">Rs.{item.MRP * item.amt}</span>
                                </li>
                                : null
                        )
                    );
                })
            );
        }
        return (  
            <div className="container">
                {this.props.total_items !== 0 ? <h5>Total number of items : {this.props.total_items}</h5> : null}
                <ul className="list-group my-3">
                    {this.props.total_items !== 0
                        ? <strong>
                            {body}
                            <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                                Total Price
                                <span className="badge badge-primary badge-pill">Rs.{this.props.total_price}</span>
                            </li>
                            <br />
                            <i className="fa fa-envelope fa-lg"></i><strong>MAIL : </strong>{this.props.location.state.email}
                            <br /><br />
                            <i className="fa fa-phone fa-lg"></i><strong>PHONE : </strong>{this.props.location.state.phone}
                            <br /><br />
                            <i className="fa fa-map-marker fa-lg"></i><strong>ADDRESS : </strong>{this.props.location.state.address}
                            <br /><br />
                            <i className="fa fa-money fa-lg"></i><strong>PAYMENT METHOD : </strong>COD
                        </strong>
                        : <h1>YOUR SHOPPING CART IS EMPTY</h1>}
                </ul>
            </div>
        );
    }
}
 
export default ConfirmOrder;