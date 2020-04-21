
import Accounts from '../../components/Accounts/accounts'
import { connect } from 'react-redux'
import { getAccounts } from '../../services/accounts'
import { getTransactions } from '../../services/transactions'
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
                type: "DIVCLICKED",
                payload: value
            }),
        onDivClicked: (value) =>
            dispatch({
                type: "ONDIVCLICK",
                payload: value
            }),
        getAccounts: async () => {
            let accounts = await getAccounts()
            dispatch({
                type: "GETACCOUNTS",
                payload: accounts,
            })
        },
        getTransactions: async () => {
            let transactions= await getTransactions()
            dispatch({
                type: "GETTRANSACTIONS",
                payload: transactions,
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accounts)