
import Accounts from '../../components/Accounts/accounts'
import {connect} from 'react-redux'
const mapStateToProps = (state) =>
    ({
       accountClicked:state.Accounts.accountClicked,
       divClicked:false,
       redirect:state.Accounts.redirect
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
            toRedirect: (value) =>
            dispatch({
                type: "REDIRECT",
                payload: value,
            })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accounts)