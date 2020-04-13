
import addTransactions from '../../components/Transactions/addTransaction'
import { connect } from 'react-redux'
const mapStateToProps = (state) =>
    ({
        description: state.Transactions.description,
        date: state.Transactions.date,
        amount: state.Transactions.amount,
        accountName: state.Transactions.accountName,
        transactionType: state.Transactions.transactionType,
        accountClicked: state.Accounts.accountClicked,
        addedTransaction: false,
        redirect:state.Accounts.redirect


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
        onAddTransaction: (value) =>
            dispatch({
                type: "ONADDTRANSACTION",
                payload: value
            }),
        toRedirect: (value) =>
            dispatch({
                type: "REDIRECT",
                payload: value,
            })


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addTransactions)