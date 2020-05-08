import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { editTransaction, getTransactionByTransactionId } from '../../services/transactions';
import { getAccounts, getAccountNameById } from '../../services/accounts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './editTransaction.css';
import '../../App.css'
import Toast from 'light-toast';
import moment from 'moment'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAccounts } from '../../actions/accountsActionConstants'
function EditTransaction() {
    const [transactionType, setTransactionType] = useState('')
    const [accountName, setAccountName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')
    const [onEditTransaction, setOnEditTransaction] = useState(false)
    const accounts = useSelector(state => state.Accounts.accounts)
    const accountClicked = useSelector(state => state.Accounts.accountClicked)
    const transactionClicked = useSelector(state => state.Transactions.transactionClicked)
    const dispatch = useDispatch()
    useEffect(() => {
        transactionsClicked(transactionClicked)
    }, [transactionClicked])
    async function transactionsClicked() {
        if (transactionClicked) {
            let obj = await getTransactionByTransactionId(transactionClicked)
            setTransactionType(obj.transactionType)
            let accountName = await getAccountNameById(obj.accountId)
            setAccountName(accountName)
            setDescription(obj.description)
            setAmount(obj.amount)
            setDate(new Date(obj.date))
        }
        else {
            setTransactionType('')
            setAccountName('')
            setDescription('')
            setAmount('')
            setDate('')
        }
        let accounts = await getAccounts()
        dispatch(fetchAccounts(accounts))
        setOnEditTransaction(false)
    }

    const handleEditTransaction = async () => {
        let transaction = {
            transactionType: transactionType,
            description: description,
            amount: amount,
            date: moment(date).format('DD-MM-YYYY'),
            accountName: accountName
        }
        if (await editTransaction(transaction, transactionClicked))
            setOnEditTransaction(true)
        else
            setOnEditTransaction(false)
        setTransactionType('')
        setAccountName('')
        setDescription('')
        setAmount('')
        setDate('')
        Toast.success("edited transaction successfully", 500)
    }
    const handleTransactionType = (e) => {
        setTransactionType(e.target.value)
    }
    const handleAccountName = (e) => {
        setAccountName(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleDate = (date) => {
        setDate(date)
    }

    return (
        <div className="mainDivEdit">
            <h2> TRANSACTION</h2>
            <input type="radio" value="income" checked={transactionType === "income"} style={{ margin: "5px" }} onChange={handleTransactionType} />
            <label className="incomeLabel">Income</label>
            <input type="radio" value="expense" checked={transactionType === "expense"} style={{ margin: "5px" }} onChange={handleTransactionType} />
            <label className="label">Expense</label>
            <div style={{ margin: "10px" }}>
                <label className="label">Description</label>
                <br />
                <input type="text" onChange={handleDescription} value={description} className="InputField"></input>
            </div>

            {accountClicked ?
                <div className="inputDiv">
                    <label className="label">Account</label>
                    <br />
                    <select value={accountClicked} onChange={handleAccountName} className="InputField" disabled>
                        <option label={accountClicked} ></option>
                    </select>
                </div>
                :
                <div className="inputDiv">
                    <label className="label">Account</label>
                    <br />
                    <select value={accountName} onChange={handleAccountName} className="InputField">
                        <option label="Select an Account "></option>
                        {accounts.map(obj => {
                            return (<option label={obj.accountName}>{obj.accountName}</option>);
                        })}
                    </select>
                </div>
            }

            <div className="inputDiv">
                <label className="label">Amount</label>
                <br />
                <input type="text" onChange={handleAmount} value={amount} className="InputField"></input>
            </div>

            <div className="inputDiv">
                <label className="label">Date</label>
                <br />
                <DatePicker
                    dateFormat='dd-MM-yyyy'
                    selected={date}
                    onChange={handleDate}
                    value={date}
                    className="InputField"
                />
            </div>

            <button onClick={handleEditTransaction} className="Button-secondary" style={{ marginLeft: "50px", height: "50px", width: "200px" }}> Edit Transaction</button>
            {onEditTransaction ? <Redirect to="/accounts" /> : null}
        </div>
    )

}

export default EditTransaction