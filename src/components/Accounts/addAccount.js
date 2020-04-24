import React from 'react';
import {Redirect } from 'react-router-dom';
import { addAccount } from '../../services/accounts';
import './addAccount.css';
import Toast from 'light-toast';
import '../../App.css'
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
            <div className="mainDivAddAcc">
                <div >
                    <label className="newAccLabel"> NEW ACCOUNT</label>
                    <br />
                </div>
                <div className="elementsDiv" >
                    <label>Account Name</label>
                    <br />
                    <input type="text" onChange={this.handleAccountName} className="InputField"></input>
                </div>
                <div className="elementsDiv">
                    <label>Starting Balance</label>
                    <br />
                    <input type="text" onChange={this.handleAccountBalance} className="InputField"></input>
                </div>
                <div className="buttonDiv">
                    <button onClick={this.handleAddAccount} className="Button-secondary" style={{marginLeft: "40vw"}}>Add Account</button>
                    {this.state.onAddAccount ? <Redirect to='/accounts'></Redirect> : null}
                </div>
            </div>
        )
    }
}
export default AddAccounts;