import React , {Component} from 'react';
import {connect} from 'react-redux';
import { createUser} from '../services/users';
import {localStorageSetItem , localStorageGetItem} from '../services/utils';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
class Signup extends Component{
    
    componentWillMount(){
        let userIdStorageItem = localStorageGetItem("userId");
        if(!userIdStorageItem){
          localStorageSetItem("userId" , 0)
        }
      }

    onUserNameChange = (event) => {
        this.props.userNameChange(event.target.value)
    }

    onPasswordChange = (event) => {
        this.props.passwordChange(event.target.value)
    }

    onSignup = () => {
        let userId = localStorageGetItem("userId");
        let user = {
            userId: ++(userId),
            userName: this.props.userName ,
            password : this.props.password 
        }
        console.log(user);
        try{
            createUser(user);
            alert("Signup successful");
        }
        catch(e){
            alert(e.message);
        }
    }


    render(){
        return(
            <div>

                USERNAME : <input type="text"  onChange={this.onUserNameChange}/>
                <br/><br/>
                PASSWORD : <input type="password"  onChange={this.onPasswordChange}/>
                <br/><br/>
                <Link to="/login">Have an account? Signin</Link>
                <button onClick={this.onSignup}>SIGNUP</button>

            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    userName : state.Users.userName,
    password : state.Users.password,
    userId : state.Users.userId,
})

const mapDispatchToProps = (dispatch) => {
    return{
        userNameChange: (value) => 
            dispatch({
                type: "USERNAMECHANGE",
                payload: value
            }),
        

        passwordChange: (value) => 
            dispatch({
                type:"PASSWORDCHANGE",
                payload: value,
            })
        
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Signup) ;