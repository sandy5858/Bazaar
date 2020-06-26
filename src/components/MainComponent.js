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
        categories: []
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

    render() { 
        let routes = (
            <Switch>
                <Route path="/" exact render={(props) =>
                    <Shop
                        {...props}
                        loading={this.state.loading}
                        shop={this.props.shop}
                        categories={this.state.categories}
                    />}
                />
                <Route path="/cart" component={Cart} />
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