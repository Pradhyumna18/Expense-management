import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { addAccount } from '../../services/accounts'
import './accounts.css'
class Accounts extends React.Component {
    state = {
        accountName: '',
        accountBalance:0,
        addedAccount: false
    }
    handleAddAccount = async () => {
        let onAddAccount = addAccount(this.state.accountName,this.state.accountBalance)
        if (onAddAccount)
            await this.setState({ addedAccount: true })
        else
            await this.setState({ addedAccount: false })
    }
    handleAccountName = (e) => {
        this.setState({ accountName: e.target.value })
    }
    handleAccountBalance=(e)=>
    {
        this.setState({accountBalance:e.target.value})
    }
    render() {
        return (
            <div style={{marginTop:"20%", textAlign:"left" , marginLeft:"100px"}}>
            <div  >
                <label style={{ fontSize: "22px", fontWeight: "bold" }} >NEW ACCOUNT</label>
                <br />
            </div>
            <div style={{margin:"15px"}}>
                <label>Account Name</label>
                <br />
                <input type="text" onChange={this.handleAccountName} className="InputField"></input>
            </div>
            <div style={{margin:"15px"}}>
                <label>Starting Balance</label>
                <br />
                <input type="text" onChange={this.handleAccountBalance} className="InputField"></input>
            </div>
            <div style={{margin:"15px", marginLeft:"60px"}}>
                <button onClick={this.handleAddAccount} className="AddAccButton">Add Account</button>
            </div>

            {/* {this.state.addedAccount ? <Redirect to="/accounts" /> : <Redirect to="/addaccount" />} */}
        </div>
        )
    }
}
export default Accounts