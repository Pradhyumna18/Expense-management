import jwt from 'jsonwebtoken';
import { localStorageSetItem, localStorageGetItem } from './utils';

export const createUser = (user) => {

    const users = localStorageGetItem('users');

    if (!users) {
        localStorageSetItem('users', []);
    }

    let userIndex = users.findIndex(item => {
        return item.userName === user.userName
    })
    if (userIndex !== -1) {
        return false
    }
    users.push(user);

    localStorageSetItem('users', users);
    localStorageSetItem("userId", user.userId)
    return true
}


export const verifyUser = (user) => {

    const users = localStorageGetItem('users');
    let userIndex = users.findIndex(item => {
        return item.userName === user.userName && item.password === user.password
    })
    if (userIndex !== -1) {
        let token = jwt.sign({ userName: user.userName, userId: users[userIndex].userId }, "xyz")
        localStorageSetItem("token", token)
        return token
    }
    return false

}