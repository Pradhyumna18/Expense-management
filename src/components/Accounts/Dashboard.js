import React ,{Component} from "react";
import {Link ,Route ,Switch, Redirect} from "react-router-dom";
import Accounts from './accounts';
import AddAccounts from './addAccount';
import AddTransaction from '../Transactions/addAndEditTransactions';
import SpecificAccount from '../../components/Transactions/specificAccountTransaction';

class Dashboard extends Component {
    render(){
        return(
            <div>
                 <div style={{ height: "75px", backgroundColor: "blue" }}>
                    <label style={{ textAlign: "left", marginLeft: "30px", fontSize: "20px" }}>EXPENSE TRACKER</label>
                    <div style={{ textAlign: "right", marginRight: "30px", position: "fixed", top: "25px" }}>
                        <label>Hi</label>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="content-container">
                    <Switch>
                        <Route exact path={`${this.props.match.path}/addaccount`}><AddAccounts /></Route>
                        <Route path={`${this.props.match.path}/addtransaction`}>  <AddTransaction /> </Route>
                        <Route path={`${this.props.match.path}/editTransaction`}><AddTransaction /> </Route>
                        <Route path={`${this.props.match.path}/specificAccountTransactions`}><SpecificAccount /> </Route>
                        <Route path={`${this.props.match.path}`} exact><Accounts /></Route>
                        {/* <Route path="*"> <Redirect to={`${this.props.match.path}`} exact/></Route> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Dashboard;