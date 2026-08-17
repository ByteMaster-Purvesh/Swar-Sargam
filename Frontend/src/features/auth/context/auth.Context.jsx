import { Children, createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    return (
        <AuthContext.Provider value = {{user, setUser, loding, setLoding}}>
            {Children}
        </AuthContext.Provider>
    )
}