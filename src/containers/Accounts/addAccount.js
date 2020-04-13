
import AddAccounts from '../../components/Accounts/addAccount'
import {connect} from 'react-redux'
const mapStateToProps = (state) =>
    ({
        accountName: state.Accounts.accountName,
        accountBalance: state.Accounts.accountBalance,
        addedAccount: state.Accounts.addedAccount,
        redirect:state.Accounts.redirect

    })
const mapDispatchToProps = (dispatch) => {
    return {
        accountNameChange: (value) =>
            dispatch({
                type: "ACCOUNTNAMECHANGE",
                payload: value
            }),
        accountBalanceChange: (value) =>
            dispatch({
                type: "ACCOUNTBALANCECHANGE",
                payload: value,
            }),
        onAddAccount: (value) =>
            dispatch({
                type: "ONADDACCOUNT",
                payload: value,
            }),
        toRedirect: (value) =>
            dispatch({
                type: "REDIRECT",
                payload: value,
            })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddAccounts)