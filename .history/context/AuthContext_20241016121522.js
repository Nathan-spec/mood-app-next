'use client'
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, {useContext, useEffect,useState} from "react"


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataObj, setUserDataObj] = useState({})
    const [loading, setLoading] = useState(true)

    // AUTH HANDLERS
    function signup(email,password){
        return createUserWithEmailAndPassword
    }

    const value = {

    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}