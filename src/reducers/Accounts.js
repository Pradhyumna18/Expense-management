const initialState = {
    accountName: '',
    accountBalance: 0,
    addedAccount: false,
    redirect: '',
    accountClicked: null,
    divClicked:null
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACCOUNTNAMECHANGE": {
            return {
                ...state,
                accountName: action.payload
            }
        }

        case "ACCOUNTBALANCECHANGE": {
            return {
                ...state,
                accountBalance: action.payload
            }
        }
        case "ONADDACCOUNT": {
            return {
                ...state,
                addedAccount: action.payload
            }
        }
        case "REDIRECT": {
            return {
                ...state,
                redirect: action.payload
            }
        }
        case "DIVCLICKED": {
            return {
                ...state,
                accountClicked: action.payload
            }
        }
        case "ONDIVCLICK": {
            return {
                ...state,
                divClicked: action.payload
            }
        }
        default: return state;
    }
}

export default accountsReducer;