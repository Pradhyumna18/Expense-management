import Signup from '../../components/Users/signup'
import { connect } from 'react-redux'
import { createUser } from '../../services/users';
import { userNameChange, passwordChange } from '../../actions/userActionConstants'
import { MdCallToAction } from 'react-icons/md';
import Toast from 'light-toast'
const mapStateToProps = (state) => ({
    userName: state.Users.userName,
    password: state.Users.password,
    signUpToggle: state.Users.signUpToggle
})

const mapDispatchToProps = (dispatch) => {
    return {
        userNameChange: (value) =>
            dispatch({
                type: userNameChange,
                payload: value
            }),
        toggle: (value) =>
            dispatch({
                type: "SIGN_UP",
                payload: value,
            }),

        passwordChange: (value) =>
            dispatch({
                type: passwordChange,
                payload: value,
            }),
        onSignUp: async (value) => {
            let bool = false
            if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(value.userName)))
                Toast.fail("username invalid", 500)
            else if (!(/\d/g.test(value.password)))
                Toast.fail('password should contain a number', 500)
            else if (!(/[a-z]/g.test(value.password)) && !(/[A-Z]/g.test(value.password)))
                Toast.fail('password should contain a  character', 500)
            else if (!(/\W/g.test(value.password)))
                Toast.fail('password should contain a special character', 500)
            else {
                bool = await createUser(value)
                if (bool) {
                    dispatch({
                        type: "SIGN_UP",
                        payload: bool,
                    })
                    Toast.success("signup successful", 500)
                }
                else {
                    Toast.fail("User already exist!", 500)
                }
            }
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);