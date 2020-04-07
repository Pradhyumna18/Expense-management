import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import {getTransactions} from '../services/transactions'
import TransactionDisplay from './Transactions/transactionDisplay'
class Accounts extends React.Component {
     componentWillMount() {
        let accountId = localStorage.getItem("accountId");
        if (!accountId) {
            localStorage.setItem("accountId", 0)
        }
    }
    render() {
        let transactions=getTransactions()
        return (
            <div>
                <Link to='/addaccount'>Add Account</Link> 
                <Link to='/addtransaction'>Add Transaction</Link>  
                {transactions.map(item=>{
                    return <TransactionDisplay>{item}</TransactionDisplay>
                })}
            </div>
        )
    }
}
export default Accounts