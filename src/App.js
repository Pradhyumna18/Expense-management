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

class App extends Component {

  componentWillMount(){
    let usersStorageItem = localStorageGetItem('users');
    if(!usersStorageItem){
     localStorageSetItem('users', []);
    }
  }

  render() {
    return (
      <div className="App">
        <Redirect from="/" to="/login" />
      <Switch>
          <Route exact path='/login'><Login /></Route>
          <Route exact path='/signup'><Signup></Signup></Route>
          </Switch>
       
      </div>
    );
  }
}

export default App;
