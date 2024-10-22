'use client'
import React, {useContext, useEffect,useState} from "react"


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userData]

    const value = {

    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}