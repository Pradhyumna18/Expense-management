import {divClicked,onDivClick,fetchTransaction} from '../../actions/accountsActionConstants'
import Accounts from '../../components/Accounts/accounts'
import { connect } from 'react-redux'
import { getAccounts } from '../../services/accounts'
import { getTransactions } from '../../services/transactions'
import { getAccount } from '../../actions/accountsActionConstants'
const mapStateToProps = (state) =>
    ({
        accountClicked: state.Accounts.accountClicked,
        divClicked: false,
        redirect: state.Accounts.redirect,
        accounts: state.Accounts.accounts,
        transactions: state.Accounts.transactions
    })
const mapDispatchToProps = (dispatch) => {
    return {
        handleDivClicked: (value) =>
            dispatch({
                type: divClicked,
                payload: value
            }),
        onDivClicked: (value) =>
            dispatch({
                type: onDivClick,
                payload: value
            }),
        getAccounts: async () => {
            console.log(getAccount)
            let accounts = await getAccounts()
            dispatch({
                type: getAccount,
                payload: accounts,
            })
        },
        getTransactions: async () => {
            let transactions= await getTransactions()
            dispatch({
                type: fetchTransaction,
                payload: transactions,
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accounts)