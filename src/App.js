import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Signin from './containers/Users/signin';
import Signup from './containers/Users/signup';
import Dashboard from './Routes/routes';

import { localStorageGetItem } from './services/utils';


class App extends Component {

  render() {
    let token = localStorageGetItem("token") || this.props.token;

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab&display=swap" rel="stylesheet"></link>
        <Router>
          {!token ?

            <Switch>
              <Route exact path='/signin'><Signin /></Route>
              <Route exact path="/signup"><Signup /></Route>
              <Route path="*" render={() => { return <Redirect to="/signin" /> }} exact />
            </Switch>

            :
            <Switch>
              <Route path="/accounts" component={Dashboard} />
              <Route path="*" render={() => <Redirect to="/accounts" />} exact />
            </Switch>

          }

        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.Users.token,
  }
}


export default connect(mapStateToProps)(App);
