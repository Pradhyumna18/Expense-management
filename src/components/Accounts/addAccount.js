import React from 'react'
import { Redirect } from 'react-router-dom'
import { addAccount } from '../../services/accounts'
import './accounts.css'
class AddAccounts extends React.Component {
    state = {
        accountName: '',
        accountBalance: 0,
        addedAccount: false
    }
    handleAddAccount = async () => {
        let onAddAccount = addAccount(this.state.accountName, this.state.accountBalance)
        if (onAddAccount)
            await this.setState({ addedAccount: true })
        else
            await this.setState({ addedAccount: false })
    }
    handleAccountName = (e) => {
        this.setState({ accountName: e.target.value })
    }
    handleAccountBalance = (e) => {
        this.setState({ accountBalance: e.target.value })
    }
    render() {
        let redirect = ''
        if (this.state.addedAccount)
            redirect = <Redirect to='/accounts'></Redirect>
        return (
            <div style={{ marginTop: "10%", textAlign: "center", marginLeft: "100px" }}>
                <div  >
                    <label style={{ fontSize: "22px", fontWeight: "bold" }} >NEW ACCOUNT</label>
                    <br />
                </div>
                <div style={{ margin: "15px" }}>
                    <label>Account Name</label>
                    <br />
                    <input type="text" onChange={this.handleAccountName} className="InputField"></input>
                </div>
                <div style={{ margin: "15px" }}>
                    <label>Starting Balance</label>
                    <br />
                    <input type="text" onChange={this.handleAccountBalance} className="InputField"></input>
                </div>
                <div style={{ margin: "15px", marginLeft: "60px" }}>
                    <button onClick={this.handleAddAccount} className="AddAccButton">Add Account</button>
                </div>
                {redirect}
            </div>
        )
    }
}
export default AddAccounts