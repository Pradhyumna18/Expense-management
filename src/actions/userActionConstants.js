export const userNameChange="USER_NAME_CHANGE";
export const passwordChange="PASSSWORD_CHANGE";
export const onSignin="SET_TOKEN";
export const signup ="SIGN_UP";

export const usernameChangeHandler = (payload) => {
    return {
        type: userNameChange,
        payload
    }
}
export const passwordChangeHandler = (payload) => {
    return {
        type: passwordChange,
        payload
    }
}
export const signin = (token) => {
    return {
        type: onSignin,
        payload: {
            token: token ,
        }
    }
}
export const signUp = (value) => {
    return{
        type: signup,
        payload: value,
    }
}