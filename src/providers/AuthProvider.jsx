import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
}
    //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

    // Check auth state
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Set loading to false once auth state is determined
            console.log("current user", currentUser);
        });

        return () => {
            unSubscribed();
        };
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// Prop validation for children
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;