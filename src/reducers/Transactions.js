const initialState = {
    transactionType: '',
    amount: null,
    accountName: '',
    description: '',
    date: null,
    transactionClicked:null
}

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLETRANSACTIONTYPE": {
            return {
                ...state,
                transactionType: action.payload
            }
        }

        case "HANDLEAMOUNT": {
            return {
                ...state,
                amount: action.payload
            }
        }
        case "HANDLEDESCRIPTION": {
            return {
                ...state,
                description: action.payload
            }
        }
        case "HANDLEDATE": {
            return {
                ...state,
                date: action.payload
            }
        }
        case "HANDLEACCOUNTNAME": {
            return {
                ...state,
                accountName: action.payload
            }
        }
        case "EDITTRANSACTION": {
            return {
                ...state,
                transactionClicked: action.payload
            }
        }
        default: return state;
    }
}

export default transactionsReducer;