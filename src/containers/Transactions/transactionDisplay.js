
import transactionDisplay from '../../components/Transactions/transactionDisplay'
import {connect} from 'react-redux'
const mapStateToProps = (state) =>
    ({
       transactionClicked:state.Transactions.transactionClicked

    })
const mapDispatchToProps = (dispatch) => {
    return {
        onEditTransaction: (value) =>
            dispatch({
                type: "EDITTRANSACTION",
                payload: value
            }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(transactionDisplay)