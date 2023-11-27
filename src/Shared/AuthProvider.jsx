/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curreentUser => {
            setUser(curreentUser)

            // const userInfo = {
            //     email: curreentUser?.email
            // }

            // if (curreentUser) {
            //     axiosPublic.post('/jwt', userInfo)
            //         .then(res => {

            //             if (res.data?.token) {
            //                 localStorage.setItem('access-token', res.data?.token)
            //             }
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            // }


            // console.log("current user", curreentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }

    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn,
        updateUserProfile,

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;