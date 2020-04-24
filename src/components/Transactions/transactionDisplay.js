import React from 'react'
import { deleteTransaction } from '../../services/transactions'
import { Link, Redirect } from 'react-router-dom'
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import './transactions.css'
import { getAccountNameById } from '../../services/accounts'
import Toast from 'light-toast';
import moment from 'moment';
class TransactionDisplay extends React.Component {
    state = {
        accountName: '',
        onDeleteTransaction: false
    }
    handleDelete = async (transactionId) => {
        await deleteTransaction(transactionId)
        this.props.onDelete()
        Toast.success("transaction deleted", 500)
    }
    async componentWillMount() {
        let accName = await getAccountNameById(this.props.children.accountId)
        this.setState({ accountName: accName, onDeleteTransaction: false })
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.children.accountId !== this.props.children.accountId) {
            let accName = await getAccountNameById(this.props.children.accountId);
            this.setState({
                accountName: accName,
            })
        }
    }
    render() {
        return (
            <div className="transactionCard" >
                <div className="TransactionItem"> {this.props.children.transactionType}</div>
                <div className="TransactionItem"> {this.props.children.description}</div>
                <div className="TransactionItem"> {moment(this.props.children.date).format('DD-MM-YYYY')}</div>
                <div className="TransactionItem"> ₹ {this.props.children.amount.toLocaleString('en-IN')}</div>
                <div className="TransactionItem">{this.state.accountName}</div>
                <MdDelete onClick={async () => await this.handleDelete(this.props.children.id)} style={{ cursor: "pointer" }} />
                <Link onClick={() => { this.props.onEditTransaction(this.props.children.id) }} to={`/accounts/edittransaction/${this.props.children.id}`}><FiEdit style={{ color: "black" }} /></Link>
                {this.state.deleteTransaction ? <Redirect to="/accounts" /> : null}
            </div>
        )
    }
}
export default TransactionDisplay ;