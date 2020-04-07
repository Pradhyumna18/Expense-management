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
            description:transaction.description,
            ammount:transaction.ammount,
            date:transaction.date,
            userId: payload.userId
        }
        transactions.push(obj)
        localStorage.setItem("transactions", JSON.stringify(transactions))
        localStorage.setItem('transactionId', JSON.stringify(transacId))
        return true
}
//Transactions : [ { transactionId , type , desc , amount , accountId , date , time , userId  } ]