import jwt from 'jsonwebtoken'
export const addTransaction = (transaction) => {

    let transactions = JSON.parse(localStorage.getItem('transactions'));
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === transaction.accountName
    })
    let transacId = JSON.parse(localStorage.getItem('transactionId'))
    transacId++
    let obj = {
        transactionId: transacId,
        accountId: accounts[accountIndex].accountId,
        transactionType: transaction.transactionType,
        description: transaction.description,
        amount: transaction.amount,
        date: transaction.date,
        userId: payload.userId
    }
    transactions.push(obj)
    console.log(transactions)
    localStorage.setItem("transactions", JSON.stringify(transactions))
    localStorage.setItem('transactionId', JSON.stringify(transacId))
    if (transactions[transacId-1].transactionType == "expense") {
      console.log(accounts[accountIndex])
        accounts[accountIndex].accountBalance =Number( accounts[accountIndex].accountBalance) - Number(transactions[transacId-1].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    else {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance )+ Number(transactions[transacId-1].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    localStorage.setItem("transactions", JSON.stringify(transactions))
    localStorage.setItem('transactionId', JSON.stringify(transacId))
    return true
}



export const getTransactions = () => {
    return JSON.parse(localStorage.getItem("transactions"))
}



export const deleteTransaction = (transactionId) => {
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    let transactionIndex = transactions.findIndex(item => {
        return item.transactionId === transactionId
    })
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    let accountIndex = accounts.findIndex(item => {
        return item.accountId === transactions[transactionIndex].accountId
    })
    if (transactions[transactionIndex].transactionType === "expense") {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) + Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        transactions.splice(transactionIndex, 1)
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }
    else {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) -Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        transactions.splice(transactionIndex, 1)
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }
}