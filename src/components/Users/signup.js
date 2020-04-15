import React, { Component } from 'react';
import { createUser } from '../../services/users';
import { localStorageSetItem, localStorageGetItem } from '../../services/utils';
import { Link, Redirect } from 'react-router-dom';
import './signin.css'
import Toast from 'light-toast'
class Signup extends Component {

    componentWillMount() {
        let userIdStorageItem = localStorageGetItem("userId");
        if (!userIdStorageItem) {
            localStorageSetItem("userId", 0)
        }
    }
    state = {
        onSignup: false
    }
    onUserNameChange = (event) => {
        this.props.userNameChange(event.target.value)
    }
    onPasswordChange = (event) => {
        this.props.passwordChange(event.target.value)
    }
    onSignup = async () => {
        let userId = localStorageGetItem("userId");
        let user = {
            userId: ++(userId),
            userName: this.props.userName,
            password: this.props.password
        }
       let bool=await createUser(user)
       console.log(bool)
        await this.setState({ onSignup: bool })
        if (this.state.onSignup)
           Toast.success("signup successful",500)
        else
            Toast.fail("username already exists",500)

    }
    render() {
        return (
            <div>
                <div style={{ marginTop: "18%" }}>
                    <h2>EXPENSE TRACKER</h2>
                    <div className="InputDivision">
                        <input type="text" placeholder="USERNAME" className="Input" onChange={this.onUserNameChange} />
                    </div>
                    <div className="InputDivision">
                        <input type="password" placeholder="PASSWORD" className="Input" onChange={this.onPasswordChange} />
                    </div>
                    <div className="InputDivision">
                        <Link to="/login">Have an account ? Signin here</Link>
                    </div>
                    <div className="InputDivision">
                        <button className="Button" onClick={this.onSignup} style={{cursor:"pointer"}}>SIGNUP</button>
                    </div>
                </div>
                {this.state.onSignup ? <Redirect to='/login'></Redirect> : <Redirect to='/signup'></Redirect>}
            </div>
        );
    }
}

export default Signup