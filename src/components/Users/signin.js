import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './signin.css';
import Toast from 'light-toast'
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSignin: false,
        }
    }
    onUserNameChange = (event) => {
        this.props.userNameChange(event.target.value)
    }
    onPasswordChange = (event) => {
        this.props.passwordChange(event.target.value)
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
                        <Link to="/signup">Does not have an account ? Register here</Link>
                    </div>
                    <div className="InputDivision">
                        <button className="Button" onClick={() => {
                            this.props.onSignin({
                                userName: this.props.userName,
                                password: this.props.password,
                            })
                        }} style={{cursor:"pointer"}}>SIGNIN</button>
                    </div>
                    {this.props.token ? <Redirect to='/accounts' /> : null}
                </div>

            </div>
        );
    }
}

export default Signin