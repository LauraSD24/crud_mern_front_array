import { createContext, useContext, useEffect, useState } from "react";

export const ContextUser = createContext();

const ContextProviderUser = ({children}) => {
  const [listUsers,setListUsers] = useState([]);
 
  return (
    <ContextUser.Provider value={{listUsers,setListUsers}}>
      {children}
    </ContextUser.Provider>
  )
}

export default ContextProviderUser;