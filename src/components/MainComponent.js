import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './ShopComponent';
import Cart from './CartComponent';
import OrdreInfo from './OrderInfoComponent';
import ConfirmOrder from './ConfirmOrderComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Register from './RegisterComponent';
import Login from './LoginComponent';
import Profile from './ProfileComponent';
import Logout from './LogoutComponent';
import axios from 'axios';

class Main extends Component {
    state = { 
        loading: true,
        shop: null,
        error: null,
        categories: [],
        total_price: 0,
        total_items: 0,
        user: null,
        refreshToken: null,
        loggedin: false
    }
    

    componentDidMount() {
        this.checkAuthStatus();
        fetch("https://bazaar-87064.firebaseio.com/Shop.json")
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

    checkAuthStatus = () => {
        let refreshToken = localStorage.getItem('refreshToken');
        let user = localStorage.getItem('user');
        if (refreshToken !== null) {
            let url = "https://bazaar-87064.firebaseio.com/Users.json";
            const queryParams = '?orderBy="email"&equalTo="' + user + '"';
            axios.get(url + queryParams)
                .then(response => {
                    //console.log(response);
                    for (let i in response.data) {
                        let User = {
                            ...response.data[i],
                            userId: i
                        }
                        this.setState({ user: User });
                        break;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            this.setState({ loggedin: true, refreshToken: refreshToken });
        }
    }

    logoutHandler = () => {
        this.setState({ user: null, refreshToken: null, loggedin: false });
    }

    render() { 
        let routes = (
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" render={(props) =>
                    <Login
                        {...props}
                        checkAuthStatus={this.checkAuthStatus}
                    />}
                />
                <Redirect to='/' />
            </Switch>
        );
        if (this.state.loggedin) {
            //console.log("huha1");
            routes = (
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/products" exact render={(props) =>
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
                    <Route path="/cart" exact render={(props) =>
                        <Cart
                            {...props}
                            loading={this.state.loading}
                            shop={this.props.shop}
                            categories={this.state.categories}
                            total_items={this.state.total_items}
                            total_price={this.state.total_price}
                            add={this.addHandler}
                            sub={this.subHandler}
                            user={this.state.user}
                        />}
                    />
                    <Route path="/order-info" exact render={(props) =>
                        <OrdreInfo
                            {...props}
                            total_items={this.state.total_items}
                            user={this.state.user}
                        />}
                    />
                    <Route path="/confirm-order" exact render={(props) =>
                        <ConfirmOrder
                            {...props}
                            loading={this.state.loading}
                            categories={this.state.categories}
                            total_items={this.state.total_items}
                            total_price={this.state.total_price}
                        />}
                    />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/profile" exact render={(props) =>
                        <Profile
                            {...props}
                            user={this.state.user}
                        />}
                    />
                    <Route path="/logout" exact render={(props) =>
                        <Logout
                            {...props}
                            logout={this.logoutHandler}
                        />}
                    />
                    <Redirect to='/' />
                </Switch>
            );
        }
        return (
            <div>
                <Navbar loggedin={this.state.loggedin} />
                <main>
                    {routes}
                </main>
            </div>
        );
    }
}
 
export default Main;
