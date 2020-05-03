import React from 'react'
import { deleteTransaction, getTransactionByAccountName } from '../../services/transactions'
import { getAccountBalance } from '../../services/accounts'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import './specificAccountTransaction.css'
import moment from 'moment'
import Toast from 'light-toast'
import '../../App.css'
class SpecificAccountTransaction extends React.Component {
    state = {
        accountBalance: '',
        transaction: [],
        accountName: ''
    }
    handleDelete = async (transactionId) => {
        await deleteTransaction(transactionId)
        let trans = await getTransactionByAccountName(this.props.accountClicked)
        this.setState({ transaction: trans })
        let accBalance = await getAccountBalance(this.props.accountClicked)
        this.setState({ accountBalance: accBalance })
        Toast.success("transaction deleted successfully", 500)
    }
    async componentWillMount() {

        let accBalance = await getAccountBalance(this.props.accountClicked)
        await this.setState({ accountBalance: accBalance })
        let trans = await getTransactionByAccountName(this.props.accountClicked)
        await this.setState({ transaction: trans })

    }
    render() {
        return (
            <div>
                <div className="linkDiv">
                    <Link onClick={() => { this.props.handleDivClicked(null) }} to="/accounts"><IoMdArrowRoundBack style={{ fontSize: "50px", color: "black" }} /></Link>
                </div>
                <div className="AccountCard">
                    <label className="nameLabel" >{window.location.pathname.substr(38)}</label>
                    <b className="accName"> ₹ {(this.state.accountBalance).toLocaleString('en-IN')} </b>
                </div>
                <div className="buttonDiv">
                    <Link to={`/accounts/addtransaction/${this.props.accountClicked}`} className="Button-primary">Add Transaction</Link>
                </div>
                {this.state.transaction.length !== 0 ? this.state.transaction.map(obj => {
                    return <div className="transactionCard">
                        <div className="TransactionItem">   {obj.transactionType}</div>
                        <div className="TransactionItem"> {obj.description}</div>
                        <div className="TransactionItem">{moment(obj.date).format('DD-MM-YYYY')}</div>
                        <div className="TransactionItem"> {obj.amount.toLocaleString('en-IN')}</div>
                        <MdDelete onClick={() => this.handleDelete(obj.id)} style={{ cursor: "pointer" }} />
                        <Link onClick={() => { this.props.onEditTransaction(obj.id) }} to={`/accounts/edittransaction/${obj.transactionId}`}><FiEdit style={{ color: "black" }} /></Link>
                    </div>
                }) : <h1>No Recent transactions</h1>}
            </div>
        )
    }
}
export default SpecificAccountTransaction;