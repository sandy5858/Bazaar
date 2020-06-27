import React, { Component } from 'react';

class Cart extends Component {
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
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => this.props.sub(category, item)}
                                        >
                                            <strong>-</strong>
                                        </button>
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => this.props.add(category, item)}
                                        >
                                            <strong>+</strong>
                                        </button>
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
                {this.props.total_items !== 0 ? <h3>Total number of items : {this.props.total_items}</h3> : null}
                <ul className="list-group my-3">
                    {this.props.total_items !== 0
                        ? <strong>
                            {body}
                            <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                                Total Price
                                <span className="badge badge-primary badge-pill">Rs.{this.props.total_price}</span>
                            </li>
                        </strong>
                        : <h1>YOUR SHOPPING CART IS EMPTY</h1>}
                </ul>
            </div>
        );
    }
}
 
export default Cart;