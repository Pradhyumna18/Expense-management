
import axios from 'axios'


export const createUser = async (user) => {
    try {
        let res = await axios.post('http://localhost:8000/signup', {
            userName: user.userName,
            password: user.password
        })
        return res.data.success
    }
    catch (err) {
        return false
    }
}


export const verifyUser = async (user) => {
    try {
        let res = await axios.post('http://localhost:8000/signin', {
            userName: user.userName,
            password: user.password
        })
        if (res.data.success == false) {
            return false
        }
        else {
            return res.data.token
        }
    }
    catch (err) {
        return false
    }


}