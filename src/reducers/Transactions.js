import { getAccounts } from '../actions/accountsActionConstants'
import { onEditTransaction } from '../actions/transactionsActionConstants'

const initialState = {
    accounts: [],
    transactionClicked: null
}

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case getAccounts: {
            return {
                ...state,
                accounts: action.payload
            }
        }
        case onEditTransaction: {
            return {
                ...state,
                transactionClicked: action.payload
            }
        }
        default: return state;
    }
}

export default transactionsReducer;