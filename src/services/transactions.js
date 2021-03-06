
import axios from 'axios'

export const addTransaction = async (transaction) => {
    try {
        let res = await axios.post('http://localhost:8000/addTransaction', {
            transactionType: transaction.transactionType,
            description: transaction.description,
            amount: transaction.amount,
            date: transaction.date,
            token: JSON.parse(localStorage.getItem("token")),
            accountName: transaction.accountName

        })
        if (res.data.message == "account name already exists") {
            return false
        }
        else {
            return true
        }
    }
    catch (err) {
        return false
    }
}


export const getTransactions = async () => {

    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let response = await axios.get('http://localhost:8000/getTransactions', {
            headers: {
                Authorization: token
            }
        })
        return response.data.transactions
    }
    catch (err) {
        return false
    }
}



export const getTransactionByAccountName = async (accountName) => {
    try {
        accountName = window.location.pathname.substr(38)
        let token = JSON.parse(localStorage.getItem("token"))
        let response = await axios.get('http://localhost:8000/getTransactionsByAccountName/' + accountName, {
            headers: {
                Authorization: token
            }
        })
        return response.data.transactions
    }
    catch (err) {
        return false
    }

}


export const getTransactionByTransactionId = async (transactionId) => {

    try {
        let response = await axios.get('http://localhost:8000/getTransactionById/' + transactionId)
        return response.data.transaction
    }
    catch (err) {
        return false
    }

}


export const deleteTransaction = async (transactionId) => {
    try {
        await axios.delete('http://localhost:8000/deleteTransaction/' + transactionId)
    }
    catch (err) {
        return false
    }
}
export const editTransaction = async (transaction, transId) => {

    try {
        await axios.put('http://localhost:8000/editTransaction', {
            transactionType: transaction.transactionType,
            description: transaction.description,
            amount: transaction.amount,
            accountName: transaction.accountName,
            transactionId: transId,
            token: JSON.parse(localStorage.getItem("token")),
        })
        return true
    }
    catch (err) {
        return false
    }


}

