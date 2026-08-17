import { registerUserApi, loginUserApi, getMeUserApi, logoutUserApi } from '../service/authAPI.service'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.Context'


export const useAuthHook = () => {
    const constextData = useContext(AuthContext) 
    const { user, setUser, loding, setLoding } = constextData
    
    const handleRegister = async ({username, email, password}) => {
        setLoding(true)
        const data = await registerUserApi({username, email, password})
        setUser(data.user)
        setLoding(false)
    }

    const handleLogin = async ({username, email, password}) => {
        setLoding(true)
        const data = await loginUserApi({username, email, password})
        setUser(data.user)
        setLoding(false)
    }

    const handleGetMe = async () => {}

    return ({}) 
}