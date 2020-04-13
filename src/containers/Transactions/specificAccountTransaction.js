
import specificAccountTransaction from '../../components/Transactions/specificAccountTransaction'
import {connect} from 'react-redux'
const mapStateToProps = (state) =>
    ({
       accountClicked:state.Accounts.accountClicked,
       transactionClicked:state.Transactions.transactionClicked

    })
const mapDispatchToProps = (dispatch) => {
    return {
        handleDivClicked: (value) =>
            dispatch({
                type: "DIVCLICKED",
                payload: value
            }),
            onEditTransaction: (value) =>
            dispatch({
                type: "EDITTRANSACTION",
                payload: value
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(specificAccountTransaction)