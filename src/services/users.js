import jwt from 'jsonwebtoken';
import { localStorageSetItem, localStorageGetItem } from './utils';
import axios from 'axios'
export const createUser = async (user) => {

    // const users = localStorageGetItem('users');

    // if (!users) {
    //     localStorageSetItem('users', []);
    // }

    // let userIndex = users.findIndex(item => {
    //     return item.userName === user.userName
    // })
    // if (userIndex !== -1) {
    //     return false
    // }
    // users.push(user);

    // localStorageSetItem('users', users);
    // localStorageSetItem("userId", user.userId)
    // return true
    try {
        let res = await axios.post('http://localhost:8000/signup', {
            userName: user.userName,
            password: user.password
        })
        console.log(res.data.message)
        if (res.data.message == 'username already exists') {
            console.log(false)
            return false
        }
        else {
            console.log(true)
            return true
        }
    }
    catch (err) {
        return false
    }
}


export const verifyUser =async (user) => {

    // const users = localStorageGetItem('users');
    // let userIndex = users.findIndex(item => {
    //     return item.userName === user.userName && item.password === user.password
    // })
    // if (userIndex !== -1) {
    //     let token = jwt.sign({ userName: user.userName, userId: users[userIndex].userId }, "xyz")
    //     localStorageSetItem("token", token)
    //     return token
    // }
    // return false
    console.log("signin")
    try {
        let res = await axios.post('http://localhost:8000/signin', {
            userName: user.userName,
            password: user.password
        })
        console.log(res.data.message)
        if (res.data.message == 'username or password incorrect') {
            console.log(false)
            return false
        }
        else {
            console.log(true,res.data.token)
            return res.data.token
        }
    }
    catch (err) {
        return false
    }


}