import jwt from 'jsonwebtoken'
export const addTransaction = (transaction) => {

    let transactions = JSON.parse(localStorage.getItem('transactions'));
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === transaction.accountName && item.userId==payload.userId
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
    let transactionIndex = transactions.findIndex(item => {
        return item.transactionId === transacId
    })
    if (transactions[transactionIndex].transactionType == "expense") {
        console.log(accounts[accountIndex])
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) - Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    else {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) + Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    localStorage.setItem("transactions", JSON.stringify(transactions))
    localStorage.setItem('transactionId', JSON.stringify(transacId))
    return true
}



export const getTransactions = () => {
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")));
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    let userTransactions = transactions.filter(obj => {
      return  obj.userId === payload.userId
        
    })
    console.log(userTransactions)
    return userTransactions;
}
export const getTransactionByAccountName = () => {
    let transactionByAccountName=[]
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")));
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    let accounts=JSON.parse(localStorage.getItem("accounts"));
    console.log(window.location.pathname.substr(38))
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === window.location.pathname.substr(38) &&(item.userId==payload.userId)
    })
    if(accountIndex!=-1)
    {
  transactionByAccountName=transactions.filter(obj=>{
     return obj.accountId==accounts[accountIndex].accountId
     
 })
}
 console.log(transactionByAccountName)
    return transactionByAccountName;
}
export const getTransactionByTransactionId = () => {
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    let transactionId = Number(window.location.pathname.substr(26))
    let accounts=JSON.parse(localStorage.getItem("accounts"));
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === window.location.pathname.substr(26)
    })
 let transactionByTransactionId=transactions.filter(obj=>{
     return obj.transactionId==transactionId
     
 })
 console.log(transactionByTransactionId)
    return transactionByTransactionId;
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
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) - Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        transactions.splice(transactionIndex, 1)
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }
}
export const editTransaction = (transaction) => {
    console.log("edit transaction")
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")));
    let transactionId = Number(window.location.pathname.substr(26))
    console.log((window.location.pathname.substr(26)))
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    let transactionIndex = transactions.findIndex(item => {
        return item.transactionId === transactionId
    })
    transaction = { ...transaction, transactionId: Number(window.location.pathname.substr(26)), accountId: transactions[transactionIndex].accountId, userId: payload.userId }
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    let accountIndex = accounts.findIndex(item => {
        return item.accountId === transactions[transactionIndex].accountId
    })
    if (transactions[transactionIndex].transactionType == "expense") {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) + Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    else {
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) - Number(transactions[transactionIndex].amount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }
    if (transaction.transactionType === "expense")
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) - Number(transaction.amount)
    else
        accounts[accountIndex].accountBalance = Number(accounts[accountIndex].accountBalance) + Number(transaction.amount)
    localStorage.setItem("accounts", JSON.stringify(accounts))
    transactions.splice(transactionIndex, 1)
    transactions.splice(transactionIndex, 0, transaction)
    localStorage.setItem("transactions", JSON.stringify(transactions))
}

