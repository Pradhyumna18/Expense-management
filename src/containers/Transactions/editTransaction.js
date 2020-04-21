
import editTransactions from '../../components/Transactions/editTransaction'
import { connect } from 'react-redux'
import {getAccounts} from '../../services/accounts'
const mapStateToProps = (state) =>
    ({
        description: state.Transactions.description,
        date: state.Transactions.date,
        amount: state.Transactions.amount,
        accountName: state.Transactions.accountName,
        transactionType: state.Transactions.transactionType,
        transactionClicked: state.Transactions.transactionClicked,
        accounts: state.Accounts.accounts

    })
const mapDispatchToProps = (dispatch) => {
    return {
        handleTransactionType: (value) =>
            dispatch({
                type: "HANDLETRANSACTIONTYPE",
                payload: value
            }),
        handleDescription: (value) =>
            dispatch({
                type: "HANDLEDESCRIPTION",
                payload: value
            }),
        handleDate: (value) =>
            dispatch({
                type: "HANDLEDATE",
                payload: value
            }),
        handleAmount: (value) =>
            dispatch({
                type: "HANDLEAMOUNT",
                payload: value
            }),
        handleAccountName: (value) =>
            dispatch({
                type: "HANDLEACCOUNTNAME",
                payload: value
            }),
        getAccounts: async () => {
            let accounts = await getAccounts()
            dispatch({
                type: "GETACCOUNTS",
                payload: accounts,
            })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(editTransactions)