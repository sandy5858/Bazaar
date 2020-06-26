import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './ShopComponent';
import Cart from './CartComponent';

class Main extends Component {
    state = { 
        loading: true,
        shop: null,
        error: null,
        categories: [],
        total_price: 0,
        total_items: 0
    }
    
    componentDidMount() {
        fetch("https://bazaar-38a69.firebaseio.com/Shop.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let loading = false;
                    let categories = [];
                    for (let i in result) {
                        let items = [];
                        for (let j in result[i]) {
                            items.push({
                                ...result[i][j],
                                amt: 0,
                                key: j
                            });
                        }
                        categories.push(
                            {
                                cat: i,
                                items: items
                            }
                        );
                    }
                    this.setState({ loading: loading, shop: result, categories: categories });
                    console.log(result);
                },
                (error) => {
                    let loading = false;
                    this.setState({ loading: loading , error: error});
                }
            )
    }

    subHandler = (category,item) => {
        let categories = [...this.state.categories];
        let index = categories.indexOf(category);
        categories[index] = { ...category };
        let index1 = categories[index].items.indexOf(item);
        categories[index].items[index1] = { ...item };
        categories[index].items[index1].amt = this.state.categories[index].items[index1].amt - 1;
        let total_price = this.state.total_price - item.MRP;
        let total_items = this.state.total_items - 1;
        if (categories[index].items[index1].amt === -1) {
            categories[index].items[index1].amt = 0;
            total_price = total_price + item.MRP;
            total_items = total_items + 1;
        }
        this.setState({ categories: categories, total_price: total_price, total_items: total_items });
    }

    addHandler = (category, item) => {
        let categories = [...this.state.categories];
        let index = categories.indexOf(category);
        categories[index] = { ...category };
        let index1 = categories[index].items.indexOf(item);
        categories[index].items[index1] = { ...item };
        categories[index].items[index1].amt = this.state.categories[index].items[index1].amt + 1;
        let total_price = this.state.total_price + item.MRP;
        let total_items = this.state.total_items + 1;
        this.setState({ categories: categories, total_price: total_price, total_items: total_items });
    }

    render() { 
        let routes = (
            <Switch>
                <Route path="/" exact render={(props) =>
                    <Shop
                        {...props}
                        loading={this.state.loading}
                        shop={this.props.shop}
                        categories={this.state.categories}
                        total_items={this.state.total_items}
                        add={this.addHandler}
                        sub={this.subHandler}
                    />}
                />
                <Route path="/cart" render={(props) =>
                    <Cart
                        {...props}
                        loading={this.state.loading}
                        shop={this.props.shop}
                        categories={this.state.categories}
                        total_items={this.state.total_items}
                        total_price={this.state.total_price}
                        add={this.addHandler}
                        sub={this.subHandler}
                    />}
                />
                <Redirect to='/' />
            </Switch>
        );
        return (
            <div>
                <Navbar />
                <main>
                    {routes}
                </main>
            </div>
        );
    }
}
 
export default Main;