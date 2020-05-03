import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Accounts from '../containers/Accounts/accounts';
import AddAccounts from '../containers/Accounts/addAccount';
import AddTransaction from '../containers/Transactions/addTransaction';
import SpecificAccount from '../containers/Transactions/specificAccountTransaction';
import { connect } from 'react-redux';
import { localStorageGetItem } from '../services/utils';
import jwt from "jsonwebtoken";
import './routes.css';
import EditTransaction from '../containers/Transactions/editTransaction'
import Toast from 'light-toast'
import { MdPersonOutline } from "react-icons/md";
class Dashboard extends Component {
    username;
    componentWillMount() {
        let payload = jwt.decode(localStorageGetItem("token"));
        this.username = payload.userName;
    }
    handleLogout = () => {
        this.props.removeToken();
        localStorage.removeItem("token")
        Toast.success("logout successful", 500)
    }
    render() {
        return (
            <div>
                <div className="mainDiv">
                    <div className="labelDiv">
                        <label className="label">EXPENSE TRACKER</label>
                    </div>
                    <div className="labelDiv2"><label style={{fontSize:"20px"}}>{this.username}</label></div>
                    <div className="rightDiv">
                        {/* <div className="labelDiv2"><label className="label">{this.username}</label></div> */}
                        <button onClick={this.handleLogout} style={{ backgroundColor: "red", cursor: "pointer", border: "none", color: "white", height: "30px", width: "150px", fontSize: "20px" }}>Logout</button>
                    </div>
                </div>
                <div className="content-container">
                    <Switch>
                        <Route exact path={`${this.props.match.path}/addaccount`}><AddAccounts /></Route>
                        <Route path={`${this.props.match.path}/addtransaction`}>  <AddTransaction /> </Route>
                        <Route path={`${this.props.match.path}/edittransaction`}><EditTransaction /> </Route>
                        <Route path={`${this.props.match.path}/specificAccountTransactions`}><SpecificAccount /> </Route>
                        <Route path={`${this.props.match.path}`} exact><Accounts /></Route>
                    </Switch>
                </div>
                <div className="footer">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.Users.token,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeToken: (value) =>
            dispatch({
                type: "REMOVE_TOKEN",
                payload: value
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);