import React from 'react';
import HoMe from './pages/hoMe.coMponent/hoMe.coMponent'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shop from './coMponents/shop.coMponent/shop.coMponent';
import Header from './coMponents/header.coMponent/header.coMponent';
import Signinpage from './pages/signin_signup/signin_signup.coMponent';
import { auth } from './firebase/firebase.util'; 

class App extends React.Component {
  #authState = null;
  constructor(){
    super();
    this.state = {currentUser: null};
  }
  componentDidMount(){
    this.#authState = auth.onAuthStateChanged((user) => {
      this.setState((prevState, prevProps) => (
        {currentUser: user}
      ));
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.#authState();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HoMe}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" component={Signinpage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
