/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext(null);   
export default function ContextProvider({children}) {

    const authInfo = {

    }
  return (
    <>
    <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
    </>
  )
}
