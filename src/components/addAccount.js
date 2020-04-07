import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import {addAccount} from '../services/accounts'
class Accounts extends React.Component {
    state={
        accountName:'',
        addedAccount:false
    }
    handleAddAccount = async() =>{
     let onAddAccount=addAccount(this.state.accountName)
     if(onAddAccount)
    await this.setState({addedAccount:true})
     else
   await  this.setState({addedAccount:false})
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
            {this.state.addedAccount?<Redirect to='/accounts'></Redirect>:<Redirect to='/addaccount'></Redirect>}
            </div>
        )
    }
}
export default Accounts