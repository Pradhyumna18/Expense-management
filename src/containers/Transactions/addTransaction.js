
import addTransactions from '../../components/Transactions/addTransaction'
import { connect } from 'react-redux'
import {getAccounts} from '../../services/accounts'
import {handleTransactionType,handleDescription,handleDate,handleAccountName,handleAmount,addTransaction} from '../../actions/transactionsActionConstants'
import { getAccount } from '../../actions/accountsActionConstants'
const mapStateToProps = (state) =>
    ({
        description: state.Transactions.description,
        date: state.Transactions.date,
        amount: state.Transactions.amount,
        accountName: state.Transactions.accountName,
        transactionType: state.Transactions.transactionType,
        accountClicked: state.Accounts.accountClicked,
        addedTransaction: false,
        redirect: state.Accounts.redirect,
        accounts:state.Accounts.accounts


    })
const mapDispatchToProps = (dispatch) => {
    return {
        handleTransactionType: (value) =>
            dispatch({
                type: handleTransactionType,
                payload: value
            }),
        handleDescription: (value) =>
            dispatch({
                type: handleDescription,
                payload: value
            }),
        handleDate: (value) =>
            dispatch({
                type: handleDate,
                payload: value
            }),
        handleAmount: (value) =>
            dispatch({
                type: handleAmount,
                payload: value
            }),
        handleAccountName: (value) =>
            dispatch({
                type: handleAccountName,
                payload: value
            }),
        onAddTransaction: (value) =>
            dispatch({
                type: addTransaction,
                payload: value
            }),
        getAccounts: async () => {
            let accounts = await getAccounts()
            dispatch({
                type: getAccount,
                payload: accounts,
            })
        },


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addTransactions)