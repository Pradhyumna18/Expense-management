import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import {addAccount} from '../services/accounts'
class Accounts extends React.Component {
    state={
        accountName:''
    }
    handleAddAccount = () =>{
     let onAddAccount=addAccount(this.state.accountName)
     
    }
    handleAccountName=(e)=>
    {
        this.setState({accountName:e.target.value})
    }
    render() {
        return (
            <div>
            <input type="text" placeholder="Account Name" onChange={this.handleAccountName}></input>
            <button onClick={this.handleAddAccount}>Add Account</button>
            </div>
        )
    }
}
export default Accounts