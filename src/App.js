import React from 'react';
import Main from './components/MainComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Shop from './components/ShopComponent';
import Cart from './components/CartComponent';
import './App.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Shop} />
      <Route path="/cart" component={Cart} />
      <Redirect to='/' />
    </Switch>
  );
  return (
    <div className="App">
      <Main>
        {routes}
      </Main>
    </div>
  );
}

export default App;
