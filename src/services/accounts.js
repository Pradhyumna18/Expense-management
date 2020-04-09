import jwt from 'jsonwebtoken'
import { localStorageSetItem, localStorageGetItem } from './utils';
export const addAccount = (accountName, accBalance) => {
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let accountIndex = accounts.findIndex(item => {
        return (item.accountName === accountName) && (item.userId == payload.userId)
    })
    if (accountIndex === -1) {

        console.log(payload.userId)
        let accId = JSON.parse(localStorage.getItem('accountId'))
        accId++
        let obj = {
            accountId: accId,
            accountName: accountName,
            accountBalance: accBalance,
            userId: payload.userId
        }
        accounts.push(obj)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        localStorage.setItem('accountId', JSON.stringify(accId))
        return true
    }
    return false

}
export const getAccounts = () => {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let payload = jwt.decode(JSON.parse(localStorage.getItem('token')));
    let userAccounts = accounts.filter(obj => {
        return obj.userId === payload.userId
    })
    console.log(userAccounts)
    return userAccounts;
}
export const getAccountBalance = (accountName) => {
    let payload = jwt.decode(JSON.parse(localStorage.getItem("token")));
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    let accBalance = accounts.map(obj => {
        if (obj.accountName == accountName && obj.userId === payload.userId)
            return obj.accountBalance;
    })
    return accBalance;

}
export const getAccountNameById = (accId) => {
    let accounts = localStorageGetItem('accounts');
    let payload = jwt.decode(localStorageGetItem("token"));
    let accName = accounts.filter(obj => {
        return obj.accountId == accId && obj.userId == payload.userId
    })
    console.log(accName[0].accountName);
    return accName[0].accountName;
}
//: [ { accountId , accountName , accountBalance , userId } ]