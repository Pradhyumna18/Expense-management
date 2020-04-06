import jwt from 'jsonwebtoken'
export const addAccount = (accountName) => {

    let accounts = JSON.parse(localStorage.getItem('accounts'));  
    console.log(accounts) 
                 
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === accountName
    })
    if (accountIndex === -1) {
        let payload=jwt.decode(JSON.parse(localStorage.getItem("token")))
        console.log(payload.userId)
        let accountId=JSON.parse(localStorage.getItem('accountId'))
        let obj={
               accountId:++accountId,
               accountName:accountName,
               accountBalance:0,
               userId:payload.userId
        }
        accounts.push(obj)
        localStorage.setItem("accounts" ,JSON.stringify(accounts))
        localStorage.setItem('accountId',JSON.stringify(accountId))
        return true
    }
    return false

} 
//: [ { accountId , accountName , accountBalance , userId } ]