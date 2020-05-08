import React from 'react'
import { deleteTransaction } from '../../services/transactions'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import './transactions.css'
import {editTransaction} from '../../actions/transactionsActionConstants'
import { getAccountNameById } from '../../services/accounts'
import Toast from 'light-toast';
import moment from 'moment';
import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
function TransactionDisplay(props) {
    const dispatch=useDispatch()
   const handleDelete = async (transactionId) => {
        await deleteTransaction(transactionId)
        props.onDelete()
        Toast.success("transaction deleted", 500)
    }
   
   async function fetchAccountNameById(accountId) {

         let accName = await getAccountNameById(props.children.accountId)
         setAccountName(accName)
    }
        const [onDeleteTransaction,setOnDeleteTransaction]=useState(false)
        const [accountName,setAccountName]=useState('')
        useEffect(()=>{
            fetchAccountNameById(props.children.accountId)
            setOnDeleteTransaction(false)
        },[props.children.accountId])
    
        return (
            <div className="transactionCard" >
                <div className="TransactionItem"> {props.children.transactionType}</div>
                <div className="TransactionItem"> {props.children.description}</div>
                <div className="TransactionItem"> {moment(props.children.date).format('DD-MM-YYYY')}</div>
                <div className="TransactionItem"> ₹ {props.children.amount.toLocaleString('en-IN')}</div>
                <div className="TransactionItem">{accountName}</div>
                <MdDelete onClick={async () => await handleDelete(props.children.id)} style={{ cursor: "pointer" }} />
                <Link onClick={() => { dispatch(editTransaction(props.children.id) )}} to={`/accounts/edittransaction/${props.children.id}`}><FiEdit style={{ color: "black" }} /></Link>
    
            </div>
        )
    
}
export default TransactionDisplay ;