import React from 'react'
import { deleteTransaction, getTransactionByAccountName } from '../../services/transactions'
import { getAccountBalance } from '../../services/accounts'
import {  Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { getAccountNameById } from '../../services/accounts';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import './transactions.css'
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
        return (
            <div>
                <div style={{ textAlign: "left" }}>
                    <Link to="/accounts"><IoMdArrowRoundBack style={{ fontSize: "50px", color: "black" }} /></Link>
                </div>
                <div className="AccountCard">
                    {accName}
                    <b style={{ fontSize: "larger" }}> ₹ {accBalance} </b>
                </div>
                <div style={{margin:"25px" , marginTop:"50px", marginRight:"500px"}}>
                        <Link to={`/accounts/addtransaction/${accName}`} className="AddTransactionButton">Add Transaction</Link>
                    </div>
                {transactions.length!==0 ? transactions.map(obj => {
                    return <div style={{ height: "50px", width: "75vw", justifyContent: "space-around", display: "flex", border: "1px solid", fontSize: "20px", margin: "10px", padding: "20px" }}>
                        <div>   {obj.transactionType}</div>
                        <div> {obj.description}</div>
                        <div>{obj.date}</div>
                        <div> {obj.amount}</div>
                        <div className="TransactionItem">{getAccountNameById(obj.accountId)}</div>
                           <MdDelete onClick={() => this.handleDelete(obj.transactionId)} />
                        <Link to={`/accounts/edittransaction/${obj.transactionId}`}><FiEdit style={{ color: "black" }} /></Link>
                    </div>
                }) : <h1>No Recent transactions</h1>}
                </div>
        )
    }

}

export default SpecificAccountTransaction