const initialState = {
    accountName: '',
    accountBalance: 0,
    addedAccount: false,
    accountClicked: null,
    divClicked: null,
    accounts:[],
    transactions:[]
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
        case "DIVCLICKED": {
            return {
                ...state,
                accountClicked: action.payload
            }
        }
        case "GETACCOUNTS": {
            return {
                ...state,
                accounts: action.payload
            }
        }
        case "GETTRANSACTIONS": {
            return {
                ...state,
                transactions: action.payload
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