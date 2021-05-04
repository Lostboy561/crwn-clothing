import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';




class App extends React.Component {


  render() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>
    </div>
    )
  }
};

export default App;
