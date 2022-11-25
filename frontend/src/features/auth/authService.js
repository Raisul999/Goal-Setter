import axios from 'axios'

const API_URL = process.env.NODE_ENV=='production'?process.env.REACT_APP_API_URL+'/api/users/':'/api/users/'
// console.log('user', API_URL)

const register = async (userData)=>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = ()=>{
    localStorage.removeItem('user')
}


const login = async (userData)=>{
    const response = await axios.post(API_URL+'login', userData)
    console.log(response)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
    logout,
    login
}

export default authService