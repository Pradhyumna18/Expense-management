import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { addAccount } from '../../services/accounts'
import './accounts.css'
import Toast from 'light-toast'
class AddAccounts extends React.Component {

    state = {
        onAddAccount: false
    }
    componentWillMount(){
        this.setState({onAddAccount:false})
    }
    handleAddAccount = async () => {
        let onAddAccount = await addAccount(this.props.accountName, this.props.accountBalance)
        console.log(onAddAccount)
        if (onAddAccount) {
            this.props.onAddAccount(onAddAccount)

            Toast.success("account added successfully", 500);
            console.log("added")
            this.setState({onAddAccount:true})
        }
        else {
            this.props.onAddAccount(onAddAccount)
            this.setState({onAddAccount:false})
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
        console.log(this.props)
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
                    {this.state.onAddAccount ? <Redirect to='/accounts'></Redirect> : null}
                </div>
            </div>
        )
    }
}
export default AddAccounts;
