import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Signin from './components/Users/signin';
import Signup from './components/Users/signup';
import Dashboard from './Routes/routes';
import {useSelector} from 'react-redux'
import { localStorageGetItem } from './services/utils';

function App() {
  const tokenProps = useSelector(state => state.Users.token)
  let token = localStorageGetItem("token") || tokenProps;
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&family=Roboto+Slab&display=swap" rel="stylesheet"></link>
      <Router>
        {!token ?
          <Switch>
            <Route exact path='/login'><Signin /></Route>
            <Route exact path="/signup"><Signup /></Route>
            <Route path="*" render={() => { return <Redirect to="/login" /> }} exact />
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
export default App;
