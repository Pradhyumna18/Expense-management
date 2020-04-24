
import transactionDisplay from '../../components/Transactions/transactionDisplay'
import {connect} from 'react-redux'
import {editTransaction} from '../../actions/transactionsActionConstants'
const mapStateToProps = (state) =>
    ({
       transactionClicked:state.Transactions.transactionClicked

    })
const mapDispatchToProps = (dispatch) => {
    return {
        onEditTransaction: (value) =>
            dispatch({
                type: editTransaction,
                payload: value
            }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(transactionDisplay)