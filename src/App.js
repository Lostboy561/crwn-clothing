import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInandSignUp from './components/pages/sign-in-and-signup/sign-in-and-signup.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
          currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()  
            }
          });      
        });
        
     }else {
       this.setState({currentUser: userAuth})
     }
    });    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInandSignUp}/>
    </Switch>
    </div>
    )
  }
};

export default App;
