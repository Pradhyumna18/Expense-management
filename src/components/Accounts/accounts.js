import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import TransactionDisplay from '../../components/Transactions/transactionDisplay';
import './accounts.css';
import '../../App.css'
import { FaRegSmileWink } from "react-icons/fa";
import '../../App.css'
import { getAccounts } from '../../services/accounts';
import { fetchAccounts, divClicked } from '../../actions/accountsActionConstants'
import { getTransactions } from '../../services/transactions';
import { fetchTransactions } from '../../actions/transactionsActionConstants'


function Accounts() {
    const accounts = useSelector(state => state.Accounts.accounts)
    const transactions = useSelector(state => state.Accounts.transactions)
    const accountClicked = useSelector(state => state.Accounts.accountClicked)
    const dispatch = useDispatch()
    let backgroundColors = [["#f7d1ab", "#f5a85b"], ["#5bf5c4", "#abf7df"], ["#a9edf5", "#66eafa"], ["#b1a5fa", "#7c67f5"], ["#e5a5fa", "#d76efa"], ["#f5a4da", "#f069c3"]]

    const handleDelete = async () => {
        let accounts = await getAccounts()
        dispatch(fetchAccounts(accounts))
        let transactions = await getTransactions()
        dispatch(fetchTransactions(transactions))
    }

    const handleDivClicked = (name) => {
        dispatch(divClicked(name))
    }
    async function getUserAccounts() {
        let accounts = await getAccounts()
        dispatch(fetchAccounts(accounts))
    }
    async function getUserTransactions() {
        let transactions = await getTransactions()
        dispatch(fetchTransactions(transactions))
    }
    useEffect(() => {
        getUserAccounts()
        getUserTransactions()

    }, [])

    let backgroundIndex = 0;
    return (
        <div>
            <div className="divMain">
                <div className="divAccountLabel">
                    <label className="accountsLabel" >ACCOUNTS</label>
                </div>
                <div className="divAccounts">
                    {accounts.map(obj => {
                        backgroundIndex = Math.floor(Math.random() * Math.floor(5));
                        return (<div className="AccountCard" style={{ backgroundImage: "linear-gradient(" + backgroundColors[backgroundIndex][1] + "," + backgroundColors[backgroundIndex][0] + ")" }} onClick={() => handleDivClicked(obj.accountName)}>
                            <div className="smileDiv">
                                <FaRegSmileWink />
                            </div>
                            <div className="AccountCardSub">
                                <label className="accNameLabel" > {obj.accountName} </label>
                                <b className="balanceLabel"> ₹ {obj.accountBalance.toLocaleString('en-IN')} </b>
                            </div>
                        </div>)
                    })}
                    <div className="AccountCard">
                        <Link to='/accounts/addaccount' className="addAccLink" >+</Link>
                    </div>
                </div>
            </div>
            <div className="transactionDiv">
                <div className="transactionDiv2">
                    <label className="addTransactionLabel"> RECENT TRANSACTIONS</label>
                    <Link to="/accounts/addtransaction" className="Button-primary">Add Transaction</Link>
                </div>
            </div>
            <div className="transDisplayTopDiv" >

                {transactions.length !== 0 ? transactions.map(item => {
                    return <TransactionDisplay onDelete={handleDelete}>{item}</TransactionDisplay>
                }) : <h1>NO RECENT TRANSACTIONS</h1>}
            </div>
            {accountClicked ? <Redirect to={`/accounts/specificAccountTransactions/${accountClicked}`} /> : null}
        </div>
    )
}

export default Accounts;