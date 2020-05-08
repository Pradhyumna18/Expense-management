
export const onEditTransaction="EDIT_TRANSACTION";
export const getTransactions="GET_TRANSACTION"


export const fetchTransactions = (transactions) => {
    return {
        type: getTransactions,
        payload: transactions,
    }
}

export const editTransaction=(value)=>{
   
    return {
        type: onEditTransaction,
        payload: value
    }
}