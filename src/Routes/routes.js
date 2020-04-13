import React ,{Component} from "react";
import {Route ,Switch} from "react-router-dom";
import Accounts from '../containers/Accounts/accounts';
import AddAccounts from '../containers/Accounts/addAccount';
import AddTransaction from '../containers/Transactions/addTransaction';
import SpecificAccount from '../containers/Transactions/specificAccountTransaction';
import {connect} from 'react-redux';
import {localStorageGetItem} from '../services/utils';
import jwt from "jsonwebtoken";
import { MdPersonOutline } from "react-icons/md";
import EditTransaction from '../containers/Transactions/editTransaction'

class Dashboard extends Component {
    username ;
    componentWillMount(){
        let payload = jwt.decode(localStorageGetItem("token"));
        this.username=payload.userName;
    }
    handleLogout = () => {
        this.props.removeToken();
        localStorage.removeItem("token")
    }
    render(){
        return(
            <div>
                 <button onClick={this.handleLogout} style={{backgroundColor:"red",cursor:"pointer",border:"none",color:"white",height:"30px",width:"150px",fontSize:"20px"}}>Logout</button>
                 <div style={{ height: "75px", backgroundColor: "blue" }}>
                    <label style={{ textAlign: "left", marginTop: "20px", fontSize: "20px",position:"fixed" }}>EXPENSE TRACKER</label>
                    <div style={{ position: "fixed", top: "45px" , height:"25px"  ,right:"20px" , display:"flex"}}>
                        <div style={{marginRight:"20px",alignItems:"left"}}><label style={{fontSize:"25px"}}><MdPersonOutline/> {this.username}</label></div>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.Users.token,
    }
  }
const mapDispatchToProps = (dispatch)  => {
    return {
        removeToken: (value) =>
            dispatch({
                type: "REMOVE_TOKEN",
                payload: value
            }),
        }
    }
export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);