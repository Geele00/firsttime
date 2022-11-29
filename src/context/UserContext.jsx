import {createContext, useContext, useState,} from "react" 
import { storageRead } from "../Utils/storage"
import {STORAGE_KEY_USER} from "../const/storageKey"

const UserContext = createContext()

export const useUser =() => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {
    
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    const state = {
        user,
        setUser
    }


    return(
        <UserContext.Provider value={state}>
        {children}
        </UserContext.Provider>
    )
} 
export default UserProvider