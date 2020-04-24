
import specificAccountTransaction from '../../components/Transactions/specificAccountTransaction'
import {connect} from 'react-redux'
import {divClicked} from '../../actions/accountsActionConstants'
import {editTransaction} from '../../actions/transactionsActionConstants'
const mapStateToProps = (state) =>
    ({
       accountClicked:state.Accounts.accountClicked,
       transactionClicked:state.Transactions.transactionClicked

    })
const mapDispatchToProps = (dispatch) => {
    return {
        handleDivClicked: (value) =>
            dispatch({
                type: divClicked,
                payload: value
            }),
            onEditTransaction: (value) =>
            dispatch({
                type: editTransaction,
                payload: value
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(specificAccountTransaction)