import React from 'react'
import { deleteTransaction } from '../../services/transactions'
import {  Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import './transactions.css'
import { getAccountNameById } from '../../services/accounts';
class TransactionDisplay extends React.Component {
    handleDelete = async () => {
        await deleteTransaction(this.props.children.transactionId)
        this.props.onDelete()
    }
    render() {
        return (
            <div style={{ height: "50px", width: "75vw", justifyContent: "space-around", display: "flex", border: "1px solid", fontSize: "20px", margin: "10px", padding: "20px" }}>
                <div>   {this.props.children.transactionType}</div>
                <div> {this.props.children.description}</div>
                <div>{this.props.children.date}</div>
                <div> {this.props.children.amount}</div>
                <div className="TransactionItem">{getAccountNameById(this.props.children.accountId)}</div>
                <MdDelete onClick={() => this.handleDelete(this.props.children.transactionId)} />
                <Link to={`/accounts/edittransaction/${this.props.children.transactionId}`}><FiEdit style={{ color: "black" }} /></Link>
            </div>
        )
    }
}
export default TransactionDisplay