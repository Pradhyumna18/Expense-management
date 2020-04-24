
import AddAccounts from '../../components/Accounts/addAccount'
import {accountNameChange,accountBalanceChange,addAccount} from '../../actions/accountsActionConstants'
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
                type: accountNameChange,
                payload: value
            }),
        accountBalanceChange: (value) =>
            dispatch({
                type: accountBalanceChange,
                payload: value,
            }),
        onAddAccount: (value) =>
            dispatch({
                type: addAccount,
                payload: value,
            })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddAccounts)