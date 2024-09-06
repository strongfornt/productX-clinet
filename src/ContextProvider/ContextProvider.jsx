/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export default function ContextProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const appleProvider = new OAuthProvider("apple.com");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme,setTheme] = useState("light")
  const [menu, setMenu] = useState(false);
  const [dropdown,setDropdown] = useState(false)
  const [productsData, setProductsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (user, update) => {
    return updateProfile(user, update);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const appleLogin = () => {
    return signInWithPopup(auth, appleProvider);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  }
  const logOut = () => {
    return signOut(auth);
  };

  const getProducts = async() => {
        const res = await fetch('/products.json');
        const data = await res.json();
        setProductsData(data)

  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

 

  const authInfo = {
    user,
    loading,
    setUser,
    setTheme,
    theme,
    menu,
    setMenu,
    dropdown,
    setDropdown,
    createUser,
    signInUser,
    updateUserProfile,
    resetPassword,
    googleLogin,
    appleLogin,
    getProducts,
    productsData,
    cartItem,
    setCartItem,
    totalPrice,
    setTotalPrice,
    logOut,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
