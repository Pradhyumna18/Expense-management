import React ,{Component} from "react";
import {Route ,Switch} from "react-router-dom";
import Accounts from './accounts';
import AddAccounts from './addAccount';
import AddTransaction from '../Transactions/addAndEditTransactions';
import SpecificAccount from '../../components/Transactions/specificAccountTransaction';
import {connect} from 'react-redux';
import {localStorageGetItem} from '../../services/utils';
import jwt from "jsonwebtoken";
class Dashboard extends Component {
    username ;
    componentWillMount(){
        let payload = jwt.decode(localStorageGetItem("token"));
        this.username=payload.userName;
    }
    handleLogout = () => {
        this.props.removeToken("");
        localStorage.removeItem("token")
        this.setState({})
    }
    render(){
        return(
            <div>
                 <div style={{ height: "75px", backgroundColor: "blue" }}>
                    <label style={{ textAlign: "left", marginLeft: "30px", fontSize: "20px" }}>EXPENSE TRACKER</label>
                    <div style={{ position: "fixed", top: "25px" , height:"25px"  ,right:"20px" , display:"flex"}}>
                        <div style={{marginRight:"20px"}}><label style={{fontSize:"15px"}}>Hi {this.username}</label></div>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="content-container">
                    <Switch>
                        <Route exact path={`${this.props.match.path}/addaccount`}><AddAccounts /></Route>
                        <Route path={`${this.props.match.path}/addtransaction`}>  <AddTransaction /> </Route>
                        <Route path={`${this.props.match.path}/edittransaction`}><AddTransaction /> </Route>
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