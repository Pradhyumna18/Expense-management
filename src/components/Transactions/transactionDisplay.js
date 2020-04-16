import React from 'react'
import { deleteTransaction } from '../../services/transactions'
import { Link, Redirect } from 'react-router-dom'
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import './transactions.css'
import { getAccountNameById } from '../../services/accounts'
import Toast from 'light-toast'
import moment from 'moment'
class TransactionDisplay extends React.Component {
    state={
        accountName:'',
        onDeleteTransaction:false
    }
    handleDelete = async (transactionId) => {
        console.log(transactionId)
       await deleteTransaction(transactionId)
       
        let accName = await getAccountNameById(this.props.children.accountId)
        await this.setState({accountName:accName})
        this.props.onDelete()
        Toast.success("transaction deleted", 500)
    }
    async componentWillMount() {
        let accName = await getAccountNameById(this.props.children.accountId)
        await this.setState({accountName:accName,onDeleteTransaction:false})
        console.log(this.state.accountName)
        
    }
    render() {
        return (
            <div style={{ height: "50px", width: "75vw", justifyContent: "space-around", display: "flex", border: "1px solid", fontSize: "20px", margin: "10px", padding: "20px" }}>
                <div>   {this.props.children.transactionType}</div>
                <div> {this.props.children.description}</div>
                <div>{moment(this.props.children.date).format('DD-MM-YYYY')}</div>
                <div> {this.props.children.amount}</div>
                <div className="TransactionItem">{this.state.accountName}</div>
                <MdDelete onClick={() => this.handleDelete(this.props.children.id)} style={{ cursor: "pointer" }} />
                <Link onClick={() => { this.props.onEditTransaction(this.props.children.id) }} to={`/accounts/edittransaction/${this.props.children.id}`}><FiEdit style={{ color: "black" }} /></Link>
              
            </div>
        )
    }
}
export default TransactionDisplay