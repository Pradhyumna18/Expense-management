import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { getTransactions } from '../../services/transactions'
import TransactionDisplay from '../../containers/Transactions/transactionDisplay'
import { getAccounts } from '../../services/accounts'
import './accounts.css'
class Accounts extends React.Component {
    state = {
        onDelete: false,
        divClicked: "",
    }
    componentWillMount() {
        let accountId = localStorage.getItem("accountId");
        if (!accountId) {
            localStorage.setItem("accountId", 0)
        }
    }
    handleDelete = () => {
        this.setState({ onDelete: true })
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
                        {getAccounts().map(obj => {
                            return (<div className="AccountCard" style={{ cursor: "pointer" }} onClick={() => { this.handleDivClicked(obj.accountName) }}>
                                {obj.accountName}
                                <b style={{ fontSize: "larger" }}> ₹ {obj.accountBalance} </b>
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
                <div style={{ marginLeft: "50px"}} >
                    {getTransactions().length !== 0 ? getTransactions().map(item => {
                        return <TransactionDisplay onDelete={this.handleDelete}>{item}</TransactionDisplay>
                    }) : <h1>NO RECENT TRANSACTIONS</h1>}
                </div>
                {this.props.accountClicked ? <Redirect to={`/accounts/specificAccountTransactions/${this.props.accountClicked}`} /> : null}
            </div>
        )
    }
}
export default Accounts