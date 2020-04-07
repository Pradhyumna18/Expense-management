import React from 'react'
import { deleteTransaction,getTransactionByAccountName } from '../../services/transactions'
import { Redirect, Link } from 'react-router-dom'
class TransactionDisplay extends React.Component {
    handleDelete = async (transactionId) => {
        console.log(transactionId)
        await deleteTransaction(transactionId)
        //this.props.onDelete()

    }
    render() {
        let transactions=getTransactionByAccountName()
        return (
            <div>
            {transactions.map(obj=>{
           return     <div style={{ height: "50px", width: "75%", justifyContent: "space-around", display: "flex", border: "1px solid" ,margin:"10px"}}>
              
                <div>   {obj.transactionType}</div>
                <div> {obj.description}</div>
                <div> {obj.date}</div>
                <div> {obj.amount}</div>
                <div>{obj.accountId}</div>
                   <button onClick={()=>this.handleDelete(obj.transactionId)}>delete transaction</button>
                    <Link to={`/edittransaction/${obj.transactionId}`}>edit transaction</Link> 
               </div>
            })}
           </div>
        )
    }
}
export default TransactionDisplay