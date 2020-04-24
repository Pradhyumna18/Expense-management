import React, { Component } from 'react';
import { createUser } from '../../services/users';
import { Link, Redirect } from 'react-router-dom';
import './signup.css'
import Toast from 'light-toast'
class Signup extends Component {

    componentWillMount(){
        this.props.toggle(false)
    }
    onUserNameChange = (event) => {
        this.props.userNameChange(event.target.value)
    }
    onPasswordChange = (event) => {
        this.props.passwordChange(event.target.value)
    }
    onSignup = async () => {
        let user = {
            userName: this.props.userName,
            password: this.props.password
        }
        this.props.onSignUp(user)
    }
    render() {
        return (
            <div>
                <div className="mainDivSign">
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
                {this.props.signUpToggle ? <Redirect to='/login'></Redirect> : <Redirect to='/signup'></Redirect>}
            </div>
        );
    }
}

export default Signup