import { createContext, useState } from "react";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvide()

    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // const googleSignIn = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    // const login = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password)
    // }
    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth)
    // }

    // const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //     })

    // }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, curreentUser => {
    //         setUser(curreentUser)
    //         const userInfo = {
    //             email: curreentUser?.email
    //         }

    //         if (curreentUser) {
    //             axiosPublic.post('/jwt', userInfo)
    //                 .then(res => {

    //                     if (res.data?.token) {
    //                         localStorage.setItem('access-token', res.data?.token)
    //                     }
    //                 })
    //         }
    //         else {
    //             localStorage.removeItem('access-token')
    //         }
    //         // console.log("current user", curreentUser)
    //         setLoading(false)
    //     })
    //     return () => {
    //         return unSubscribe()
    //     }

    // }, [axiosPublic])








    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        googleSignIn
    }

    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;