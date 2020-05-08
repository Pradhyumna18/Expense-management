import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { addAccount } from '../../services/accounts';
import './addAccount.css';
import Toast from 'light-toast';
import '../../App.css'
function AddAccounts() {
    const [onAddAccount, setOnAddAccount] = useState(false)
    const [accountName, setAccountNameChange] = useState('')
    const [accountBalance, setAccountBalanceChange] = useState(0)
    useEffect(() => {
        setOnAddAccount(false)
    }, [])
    const handleAddAccount = async () => {
        let onAddAccount = await addAccount(accountName, accountBalance)
        if (onAddAccount) {
            Toast.success("account added successfully", 500);
            setOnAddAccount(true)
        }
        else {
            setOnAddAccount(false)
            Toast.fail("account name already exists", 500)
        }
    }
    const handleAccountName = (e) => {
        setAccountNameChange(e.target.value)
    }
    const handleAccountBalance = (e) => {
        setAccountBalanceChange(e.target.value)
    }
    return (
        <div className="mainDivAddAcc">
            <div >
                <label className="newAccLabel"> NEW ACCOUNT</label>
                <br />
            </div>
            <div className="elementsDiv" >
                <label>Account Name</label>
                <br />
                <input type="text" onChange={handleAccountName} className="InputField"></input>
            </div>
            <div className="elementsDiv">
                <label>Starting Balance</label>
                <br />
                <input type="text" onChange={handleAccountBalance} className="InputField"></input>
            </div>
            <div className="buttonDiv">
                <button onClick={handleAddAccount} className="Button-secondary" style={{ marginLeft: "41vw" }}>Add Account</button>
                {onAddAccount ? <Redirect to='/accounts'></Redirect> : null}
            </div>
        </div>
    )
}

export default AddAccounts;