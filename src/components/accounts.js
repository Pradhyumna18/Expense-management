import React from 'react'
import { Redirect,Link } from 'react-router-dom'
class Accounts extends React.Component {
     componentWillMount() {
        let accountId = localStorage.getItem("accountId");
        if (!accountId) {
            localStorage.setItem("accountId", 0)
        }
    }
    render() {
        return (
            <div>
                <Link to='/addaccount'>Add Account</Link> 
                <Link to='/addtransaction'>Add Transaction</Link>  
            </div>
        )
    }
}
export default Accounts