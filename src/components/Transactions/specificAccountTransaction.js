import React from 'react'
import { deleteTransaction, getTransactionByAccountName } from '../../services/transactions'
import {getAccountBalance} from '../../services/accounts'
import { Redirect, Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
class SpecificAccountTransaction extends React.Component {
    handleDelete = async (transactionId) => {
        console.log(transactionId)
        await deleteTransaction(transactionId)
        this.setState({})

    }
    render() {
        let transactions = getTransactionByAccountName()
        let accName = window.location.pathname.substr(38);
        let accBalance = getAccountBalance(accName);
        console.log(transactions)
        if (transactions.length != 0) {
            return (
                <div>
                    <div style={{ textAlign: "left" }}>
                        <Link to="/accounts"><IoMdArrowRoundBack style={{ fontSize: "50px", color: "black" }} /></Link>
                    </div>
                    <div className="AccountCard">
                        {accName}
                         <b style={{ fontSize: "larger" }}> ₹ {accBalance} </b> 
                    </div>
                    {transactions.map(obj => {
                        return <div style={{ height: "50px", width: "75%", justifyContent: "space-around", display: "flex", border: "1px solid", margin: "10px" }}>
                            <div>   {obj.transactionType}</div>
                            <div> {obj.description}</div>
                            <div> {obj.date}</div>
                            <div> {obj.amount}</div>
                            <div>{obj.accountId}</div>
                            <button onClick={() => this.handleDelete(obj.transactionId)}>delete transaction</button>
                            <Link to={`/edittransaction/${obj.transactionId}`}>edit transaction</Link>
                        </div>
                    })}
                </div>
            )
        }
        else {
            return <div>No transactions</div>
        }
    }
}
export default SpecificAccountTransaction