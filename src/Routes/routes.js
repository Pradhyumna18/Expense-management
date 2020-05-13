import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Accounts from '../components/Accounts/accounts';
import AddAccounts from '../components/Accounts/addAccount';
import AddTransaction from '../components/Transactions/addTransaction';
import SpecificAccount from '../components/Transactions/specificAccountTransaction';
import { localStorageGetItem } from '../services/utils';
import jwt from "jsonwebtoken";
import './routes.css';
import EditTransaction from '../components/Transactions/editTransaction'
import Toast from 'light-toast'
import { useDispatch } from 'react-redux'
import { signin } from '../actions/userActionConstants'

function Dashboard(props) {
    const [username, setUserName] = useState('')
    const dispatch = useDispatch()
    const handleLogout = () => {
        localStorage.removeItem("token")
        dispatch(signin(null))
        Toast.success("logout successful", 500)
    }
    useEffect(() => {
        let payload = jwt.decode(localStorageGetItem("token"));
        setUserName(payload.userName)
    }, [])
    return (
        <div>
            <div className="mainDiv">
                <div className="labelDiv">
                    <label className="label">EXPENSE TRACKER</label>
                </div>
                <div className="labelDiv2"><label style={{ fontSize: "20px" }}>{username}</label></div>
                <div className="rightDiv">
                    <button onClick={handleLogout} style={{ backgroundColor: "red", cursor: "pointer", border: "none", color: "white", height: "30px", width: "150px", fontSize: "20px" }}>Logout</button>
                </div>
            </div>
            <div className="content-container">
                <Switch>
                    <Route exact path={`${props.match.path}/addaccount`}><AddAccounts /></Route>
                    <Route path={`${props.match.path}/addtransaction`}>  <AddTransaction /> </Route>
                    <Route path={`${props.match.path}/edittransaction`}><EditTransaction /> </Route>
                    <Route path={`${props.match.path}/specificAccountTransactions`}><SpecificAccount /> </Route>
                    <Route path={`${props.match.path}`} exact><Accounts /></Route>
                </Switch>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}
export default Dashboard

