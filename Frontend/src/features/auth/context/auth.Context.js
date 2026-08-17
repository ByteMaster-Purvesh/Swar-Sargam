import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials : true
})

export const registerUserApi = async ({usearname, email, password}) => {
    const response = await api.post('/api/auth/register', {
        username, email, password
    })
    return response.data
}   

export const loginUserApi = async ({username, email, password}) => {
    const responce = await api.post('/api/auth/login', {
        username, email, password
    })

    return responce.data
}

export const getMeUserApi = async () => {
    const responce = await api.get('/api/auth/get-me')
    return responce.data 
}

export const logotUserApi = async () => {
    const responce = await api.post('/api/auth/logout')
    return response.data
}