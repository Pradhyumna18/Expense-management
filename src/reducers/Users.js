import { userNameChange, passwordChange, onSignin,signup } from '../actions/userActionConstants'
const initialState = {
    userName: "",
    password: "",
    token: null,
    signUpToggle:false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userNameChange: {
            return {
                ...state,
                userName: action.payload
            }
        }
        case passwordChange: {
            return {
                ...state,
                password: action.payload
            }
        }
        case signup: {
            
            return {
                ...state,
                signUpToggle: action.payload,
            }
        }
        case onSignin: {
            return {
                ...state,
                token: action.payload.token,
            }
        }

        default: return state;
    }
}

export default userReducer;