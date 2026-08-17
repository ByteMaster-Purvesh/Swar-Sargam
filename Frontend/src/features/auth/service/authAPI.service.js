import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
})

export const registerUserApi = async ({ username, email, password }) => {
    const response = await api.post('/api/auth/register', {
        username, email, password
    })
    return response.data
}   

export const loginUserApi = async ({ username, email, password }) => {
    const response = await api.post('/api/auth/login', {
        username, email, password
    })
    return response.data
}

export const getMeUserApi = async () => {
    try {
        const response = await api.get('/api/auth/get-me')
        return response.data
    } catch (err) {
        if (err.response && err.response.status === 401) {
            return { user: null }
        }
        throw err
    }
}

export const logoutUserApi = async () => {
    const response = await api.post('/api/auth/logout')
    return response.data
}

export const saveExpressionApi = async ({ emotion, confidence, blendshapeScores }) => {
    const response = await api.post('/api/auth/expression', {
        emotion, confidence, blendshapeScores
    })
    return response.data
}