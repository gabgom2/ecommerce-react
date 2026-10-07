import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });

        return () => unsubscribe();
    }, []);

    const register = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    await updateProfile(result.user, {
        displayName: name,
    });

    return result;
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    const updateUserName = async (name) => {
        if (!auth.currentUser) return;

        await updateProfile(auth.currentUser, {
            displayName: name,
        });

        setUser({
            ...auth.currentUser,
        });
    };


    return (
        <AuthContext.Provider value={{ user, register, login, logout, updateUserName }}>
            {children}
        </AuthContext.Provider>
    );
};
