'use client'
import React, {useContext, useEffect,useState} from "react"


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const value = {
        
    }
    return (
        <AuthContext.Provider>
            {}
        </AuthContext.Provider>
    )
}