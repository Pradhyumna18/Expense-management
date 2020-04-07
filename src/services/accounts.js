import jwt from 'jsonwebtoken'
export const addAccount = (accountName) => {

    let accounts = JSON.parse(localStorage.getItem('accounts'));  
    let accountIndex = accounts.findIndex(item => {
        return item.accountName === accountName
    })
    if (accountIndex === -1) {
        let payload=jwt.decode(JSON.parse(localStorage.getItem("token")))
        console.log(payload.userId)
        let accId=JSON.parse(localStorage.getItem('accountId'))
        accId++
        let obj={
               accountId:accId,
               accountName:accountName,
               accountBalance:0,
               userId:payload.userId
        }
        accounts.push(obj)
        localStorage.setItem("accounts" ,JSON.stringify(accounts))
        localStorage.setItem('accountId',JSON.stringify(accId))
        return true
    }
    return false

} 
export const getAccounts = () => {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let payload=jwt.decode(JSON.parse(localStorage.getItem('token')));
    let userAccounts = accounts.map(obj => {
    if(obj.userId === payload.userId){
    return obj;
    }
    })
    return userAccounts ;
    }
//: [ { accountId , accountName , accountBalance , userId } ]