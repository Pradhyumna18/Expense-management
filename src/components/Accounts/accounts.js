import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import TransactionDisplay from '../../containers/Transactions/transactionDisplay'
import './accounts.css'
class Accounts extends React.Component {
   
    async componentWillMount() {
        this.props.getAccounts()
        this.props.getTransactions()
    }

    handleDelete = async () => {
        this.props.getAccounts()
        this.props.getTransactions()
    }
    handleDivClicked = (name) => {
        this.props.handleDivClicked(name)
    }
    render() {
        return (

            <div>
                <div style={{ margin: "25px" }}>
                    <div style={{ textAlign: "left", marginLeft: "25px" }}>
                        <label style={{ fontWeight: "bold" }} >ACCOUNTS</label>
                    </div>
                    <div style={{ overflowX: "auto", display: "flex", border: "black" }} >
                        {this.props.accounts.map(obj => {
                            return (<div className="AccountCard" style={{ cursor: "pointer" }} onClick={() => { this.handleDivClicked(obj.accountName) }}>
                                {obj.accountName}
                                <b style={{ fontSize: "larger" }}> ₹ {obj.accountBalance.toLocaleString('en-IN')} </b>
                            </div>)
                        })}
                        <div className="AccountCard">
                            <Link to='/accounts/addaccount' style={{ textDecoration: "none", fontSize: "50px" }}>+</Link>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <div style={{ textAlign: "left", marginLeft: "50px", marginBottom: "25px" }}>
                        <label style={{ fontWeight: "bold", fontSize: "17px", marginRight: "20px" }}> RECENT TRANSACTIONS</label>
                        <Link to="/accounts/addtransaction" className="AddTransactionButton">Add Transaction</Link>
                    </div>
                </div>
                <div style={{ marginLeft: "50px" }} >
                    {this.props.transactions.length !== 0 ? this.props.transactions.map(item => {
                        return <TransactionDisplay onDelete={this.handleDelete}>{item}</TransactionDisplay>
                    }) : <h1>NO RECENT TRANSACTIONS</h1>}
                </div>
                {this.props.accountClicked ? <Redirect to={`/accounts/specificAccountTransactions/${this.props.accountClicked}`} /> : null}

            </div>
        )
    }
}
export default Accounts