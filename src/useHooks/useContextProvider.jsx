import { useContext } from "react"
import { AuthContext } from "../ContextProvider/ContextProvider"


export default function useContextProvider() {
    const auth = useContext(AuthContext)
    return auth;
}
