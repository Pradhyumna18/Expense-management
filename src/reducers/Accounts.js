import {onDivClicked,getAccounts} from '../actions/accountsActionConstants'

const initialState = {
    accountClicked: null,
    accounts:[],
    transactions:[]
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {

        case onDivClicked: {
            return {
                ...state,
                accountClicked: action.payload
            }
        }
        case getAccounts: {
            return {
                ...state,
                accounts: action.payload
            }
        }
        case "GET_TRANSACTION": {
            return {
                ...state,
                transactions: action.payload
            }
        }
    
        default: return state;
    }
}

export default accountsReducer;