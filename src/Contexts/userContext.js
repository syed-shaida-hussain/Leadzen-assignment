import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [users , setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})

   return <UserContext.Provider value = {{users , setUsers , currentUser , setCurrentUser}}>
        {children}
    </UserContext.Provider>
}

const useUsers = () => useContext(UserContext)

export { UserProvider , useUsers}