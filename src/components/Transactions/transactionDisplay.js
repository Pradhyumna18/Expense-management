import React from 'react'
import {deleteTransaction} from '../../services/transactions'
class TransactionDisplay extends React.Component {
    handleDelete=()=>
    [
        deleteTransaction(this.props.children.transactionId)
    ]
    render() {
        return (
            <div style={{border:"black"}}>
                {this.props.children.transactionType}<br></br><br></br>
                {this.props.children.description}<br></br><br></br>
                {this.props.children.date}<br></br><br></br>
                {this.props.children.amount}<br></br><br></br>
                {this.props.children.accountId}<br></br><br></br>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}
export default TransactionDisplay