import React from 'react'
import { deleteTransaction } from '../../services/transactions'
import { Redirect, Link } from 'react-router-dom'
class TransactionDisplay extends React.Component {
    handleDelete = async () => {
        await deleteTransaction(this.props.children.transactionId)
        this.props.onDelete()
    }
    render() {
        return (
            <div style={{ height: "50px", width: "75%", justifyContent: "space-around", display: "flex", border: "1px solid", margin: "10px" }}>
                <div>   {this.props.children.transactionType}</div>
                <div> {this.props.children.description}</div>
                <div> {this.props.children.date}</div>
                <div> {this.props.children.amount}</div>
                <div>{this.props.children.accountId}</div>
                <button onClick={this.handleDelete}>delete transaction</button>
                <Link to={`/edittransaction/${this.props.children.transactionId}`}>edit transaction</Link>
            </div>
        )
    }
}
export default TransactionDisplay