'use client'
import { db } from "@/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
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
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password){
        return signInWithEmailAndPassword( auth, email, password)
    }

    function logout(){
        setUserDataObj({})
        setCurrentUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                // Set the user to the local context state
                setLoading(true)
                setCurrentUser(user)
                if (!user) {
                    return
                }
                // If user exists, fetch data from firestore database
                console.log('Fetching user data')
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                let firebaseData = {}
                if(docSnap.exists()) {
                    console.log('Found user data')
                    firebaseData = docSnap.data()
                    console.log(firebaseData)
                }
            } catch(err)
            {
                console.log(err.message)
            } finally {
                setLoading(false)
            }

        })
    }, [])

    const value = {
        currentUser,
        userDataObj,
        signup,
        login,
        logout,
        
        unsubscribe,
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}