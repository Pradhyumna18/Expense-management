import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from './components/signin';
import {localStorageGetItem , localStorageSetItem} from './services/utils';
import Signup from './components/Signup';
import AddAccount from './components/addAccount'
import Accounts from './components/accounts'
class App extends Component {

  componentWillMount(){
    let users = localStorageGetItem('users');
    if(!users){
     localStorageSetItem('users', []);
    }
    let transactions = localStorage.getItem('transactions');
    if(!transactions){
     localStorage.setItem('transactions', JSON.stringify([]));
    }
    let accounts = localStorage.getItem('accounts');
    if(!accounts){
     localStorage.setItem('accounts',JSON.stringify([]));
    }
  }

  render() {
    return (
      <div className="App">
        <Redirect from="/" to="/login" />
      <Switch>
          <Route exact path='/login'><Login /></Route>
          <Route exact path='/signup'><Signup></Signup></Route>
          <Route exact path='/accounts'><Accounts></Accounts></Route>
          <Route exact path='/addaccount'><AddAccount></AddAccount></Route>
          </Switch>
       
      </div>
    );
  }
}

export default App;
