import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import Loader from '../components/Loader';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const userLogOut = () => {
        return signOut(auth);
    }

    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const AuthData = { user, userRegister, userLogin, userLogOut, googleLogIn, userProfileUpdate };

    if(loading) {
        return <Loader></Loader>
    }

    return (
        <AuthContext.Provider value={AuthData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;