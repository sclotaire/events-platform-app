import { View, Text } from 'react-native'
import React, {useEffect, useState } from 'react'
import { auth } from '../firebaseConfig.js'

export default function useAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user=>{
            console.log('got user', user)
            if(user){
                setUser(user);
            } else {
                setUser(null);
            }

        })
        return unsubscribe
    }, [])

    return { user }
}