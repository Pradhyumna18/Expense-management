import React, { useEffect, useState } from 'react'
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
import { useSelector, useDispatch } from 'react-redux';
import { divClicked } from '../../actions/accountsActionConstants'
import { editTransaction } from '../../actions/transactionsActionConstants'

function SpecificAccountTransaction() {
    const [accountBalance, setAcccountBalance] = useState(0)
    const [transaction, setTransaction] = useState([])
    const accountClicked = useSelector(state => state.Accounts.accountBalance)
    const dispatch = useDispatch()
    async function fetchTransactionByAccountName() {
        let trans = await getTransactionByAccountName(accountClicked)
        setTransaction(trans)
    }
    async function fetchAccountBalance() {
        let accBalance = await getAccountBalance(accountClicked)
        setAcccountBalance(accBalance)
    }
    const handleDelete = async (transactionId) => {
        await deleteTransaction(transactionId)
        fetchTransactionByAccountName()
        fetchAccountBalance()
        Toast.success("transaction deleted successfully", 500)
    }
    useEffect(() => {
        fetchTransactionByAccountName()
        fetchAccountBalance()
    }, [])

    return (
        <div>
            <div className="linkDiv">
                <Link onClick={() => dispatch(divClicked(null))} to="/accounts"><IoMdArrowRoundBack style={{ fontSize: "50px", color: "black" }} /></Link>
            </div>
            <div className="AccountCard">
                <label className="nameLabel" >{window.location.pathname.substr(38)}</label>
                <b className="accName"> ₹ {(accountBalance).toLocaleString('en-IN')} </b>
            </div>
            <div className="buttonDiv">
                <Link to={`/accounts/addtransaction/${accountClicked}`} className="Button-primary">Add Transaction</Link>
            </div>
            {transaction.length !== 0 ? transaction.map(obj => {
                return <div className="transactionCard">
                    <div className="TransactionItem">   {obj.transactionType}</div>
                    <div className="TransactionItem"> {obj.description}</div>
                    <div className="TransactionItem">{moment(obj.date).format('DD-MM-YYYY')}</div>
                    <div className="TransactionItem"> {obj.amount.toLocaleString('en-IN')}</div>
                    <MdDelete onClick={() => handleDelete(obj.id)} style={{ cursor: "pointer" }} />
                    <Link onClick={() => { dispatch(editTransaction(obj.id)) }} to={`/accounts/edittransaction/${obj.id}`}><FiEdit style={{ color: "black" }} /></Link>
                </div>
            }) : <h1>No Recent transactions</h1>}
        </div>
    )
}

export default SpecificAccountTransaction;