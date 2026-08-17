import { registerUserApi, loginUserApi, getMeUserApi, logoutUserApi } from '../service/authAPI.service'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.Context'

export const useAuthHook = () => {
    const contextData = useContext(AuthContext) 
    const { user, setUser, loading, setLoading } = contextData
    
    const handleRegister = async ({ username, email, password }) => {
        if (setLoading) setLoading(true)
        try {
            const data = await registerUserApi({ username, email, password })
            if (data?.user) setUser(data.user)
            return data
        } catch (error) {
            console.error('Registration failed:', error)
            throw error
        } finally {
            if (setLoading) setLoading(false)
        }
    }

    const handleLogin = async ({ username, email, password }) => {
        if (setLoading) setLoading(true)
        try {
            const data = await loginUserApi({ username, email, password })
            if (data?.user) setUser(data.user)
            return data
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        } finally {
            if (setLoading) setLoading(false)
        }
    }

    const handleGetMe = async () => {
        if (setLoading) setLoading(true)
        try {
            const data = await getMeUserApi()
            if (data?.user) setUser(data.user)
            return data
        } catch (error) {
            console.error('GetMe failed:', error)
            setUser(null)
        } finally {
            if (setLoading) setLoading(false)
        }
    }

    const handleLogout = async () => {
        if (setLoading) setLoading(true)
        try {
            await logoutUserApi()
            setUser(null)
            localStorage.removeItem('isGuest')
        } catch (error) {
            console.error('Logout failed:', error)
            setUser(null)
        } finally {
            if (setLoading) setLoading(false)
        }
    }

    return { user, loading, handleRegister, handleLogin, handleGetMe, handleLogout } 
}
