import Signin from '../../components/Users/signin'
import { verifyUser } from '../../services/users';
import { localStorageSetItem } from '../../services/utils';
import {connect} from 'react-redux'
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

        onSignin: (user) => {
            let token = verifyUser(user)

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