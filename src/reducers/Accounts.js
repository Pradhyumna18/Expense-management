import {accountNameChange,accountBalanceChange,addAccount,divClicked,onDivClick,fetchTransaction} from '../actions/accountsActionConstants'
import {getAccount} from '../actions/transactionsActionConstants'
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
        case accountNameChange: {
            return {
                ...state,
                accountName: action.payload
            }
        }

        case accountBalanceChange: {
            return {
                ...state,
                accountBalance: action.payload
            }
        }
        case addAccount: {
            return {
                ...state,
                addedAccount: action.payload
            }
        }
        case divClicked: {
            return {
                ...state,
                accountClicked: action.payload
            }
        }
        case getAccount: {
            console.log(getAccount)
            return {
                ...state,
                accounts: action.payload
            }
        }
        case fetchTransaction: {
            return {
                ...state,
                transactions: action.payload
            }
        }
        case onDivClick: {
            return {
                ...state,
                divClicked: action.payload
            }
        }
        default: return state;
    }
}

export default accountsReducer;