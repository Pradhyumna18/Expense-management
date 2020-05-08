
import axios from 'axios'
export const addAccount = async (accountName, accBalance) => {
    try {
        let res = await axios.post('http://localhost:8000/addAccount', {
            accountName: accountName,
            accountBalance: accBalance,
            token:JSON.parse(localStorage.getItem("token"))
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
        console.log("get Accounts");
        
        let response = await axios.get('http://localhost:8000/getAccountsByUserId',{
            headers: {
              token:JSON.parse(localStorage.getItem("token"))
            }
          })
        return response.data.accounts
    }
    catch (err) {
        return false
    }

}
export const getAccountBalance = async (accountName) => {

    try {
        accountName = window.location.pathname.substr(38)
        let response = await axios.get('http://localhost:8000/getAccountBalance/'  + accountName,{
            headers: {
              token:JSON.parse(localStorage.getItem("token"))
            }
          })
        return response.data.balance
    }
    catch (err) {
        return false
    }

}
export const getAccountNameById = async (accId) => {

    try {
        let response = await axios.get('http://localhost:8000/getAccountNameById/'+accId)
        return response.data.accountName
    }
    catch (err) {
        return false
    }

}
