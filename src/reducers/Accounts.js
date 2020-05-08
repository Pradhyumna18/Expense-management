import {onDivClicked,getAccounts} from '../actions/accountsActionConstants'
import {getTransactions} from '../actions/transactionsActionConstants'
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
        case getTransactions: {
            return {
                ...state,
                transactions: action.payload
            }
        }
    
        default: return state;
    }
}

export default accountsReducer;