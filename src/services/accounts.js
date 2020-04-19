import jwt from 'jsonwebtoken'
import axios from 'axios'
export const addAccount = async (accountName, accBalance) => {
    try {
        let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
        let res = await axios.post('http://localhost:8000/addAccount', {
            accountName: accountName,
            accountBalance: accBalance,
            userId: payload.userId
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
export const getAccounts = async () => {
    try {
        let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
        let response = await axios.get('http://localhost:8000/getAccountsByUserId/' + payload.userId)
        return response.data.accounts
    }
    catch (err) {
        return false
    }

}
export const getAccountBalance = async (accountName) => {

    try {
        accountName = window.location.pathname.substr(38)
        let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
        let response = await axios.get('http://localhost:8000/getAccountBalance/' + payload.userId + '/' + accountName)
        return response.data.balance
    }
    catch (err) {
        return false
    }

}
export const getAccountNameById = async (accId) => {

    try {
        let payload = jwt.decode(JSON.parse(localStorage.getItem("token")))
        let response = await axios.get('http://localhost:8000/getAccountNameById/' + payload.userId + '/' + accId)
        return response.data.accountName
    }
    catch (err) {
        return false
    }

}
