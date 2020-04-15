import Signin from '../../components/Users/signin'
import { verifyUser } from '../../services/users';
import { localStorageSetItem } from '../../services/utils';
import {connect} from 'react-redux'
import Toast from 'light-toast'
const mapStateToProps = (state) => ({
    userName: state.Users.userName,
    password: state.Users.password,
    userId: state.Users.userId,
    token: state.Users.token,
})

const mapDispatchToProps = (dispatch) => {
    return {
        userNameChange: (value) =>
            dispatch({
                type: "USERNAMECHANGE",
                payload: value
            }),
        passwordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value,
            }),

        onSignin:async (user) => {
            let token =await verifyUser(user)
           if(!token)
           Toast.fail("signin failed",500)
            localStorageSetItem("token", token);

            dispatch({
                type: "SET_TOKEN",
                payload: {
                    token: token ? token : null,
                }
            })

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);