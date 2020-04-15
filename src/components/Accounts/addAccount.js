import React from 'react'
import { Link } from 'react-router-dom'
import { addAccount } from '../../services/accounts'
import './accounts.css'
import Toast from 'light-toast'
class AddAccounts extends React.Component {

    handleAddAccount = async () => {
        let onAddAccount = await addAccount(this.props.accountName, this.props.accountBalance)
        console.log(onAddAccount)
        if (onAddAccount) {
            this.props.onAddAccount(onAddAccount)
            Toast.success("account added successfully", 500);
            console.log("added")
        }
        else {
            this.props.onAddAccount(onAddAccount)
            Toast.fail("account name already exists", 500)
        }
    }
    handleAccountName = (e) => {
        this.props.accountNameChange(e.target.value)
    }
    handleAccountBalance = (e) => {
        this.props.accountBalanceChange(e.target.value)
    }
    render() {
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
                    <Link to="/accounts" onClick={this.handleAddAccount} className="AddAccButton">Add Account</Link>
                </div>
            </div>
        )
    }
}
export default AddAccounts;
