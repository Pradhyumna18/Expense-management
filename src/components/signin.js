import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../services/users';
import { localStorageSetItem, localStorageGetItem } from '../services/utils';
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';
import Signup from './Signup'

class SignIn extends Component {

    componentWillMount() {
        let userIdStorageItem = localStorageGetItem("userId");
        if (!userIdStorageItem) {
            localStorageSetItem("userId", 0)
        }
    }
state={
    onSignin:false
}

    onUserNameChange = (event) => {
        this.props.userNameChange(event.target.value)
    }

    onPasswordChange = (event) => {
        this.props.passwordChange(event.target.value)
    }

    onSignin = () => {
        let user = {
            userName: this.props.userName,
            password: this.props.password,
        }

      //   onSignin = verifyUser(user);
       this.setState({onSignin: verifyUser(user)})
    }

    render() {
        return (
            <div>

                USERNAME : <input type="text" onChange={this.onUserNameChange} />
                <br /><br />
                PASSWORD : <input type="password" onChange={this.onPasswordChange} />
                <br /><br />
              
                    <Link to="/signup">Don't have a account? Register here</Link>
                    {this.state.onSignin?<Redirect></Redirect>:<Redirect></Redirect>}
              
                <br></br><br></br>    <button onClick={this.onSignin}>SIGNIN</button>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userName: state.Users.userName,
    password: state.Users.password,
    userId: state.Users.userId,
})

const mapDispatchToProps = (dispatch) => {
    return {
        userNameChange: (value) =>
            dispatch({
                type: "USERNAMECHANGE",
                payload: value
            }),


        passwordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value,
            })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);