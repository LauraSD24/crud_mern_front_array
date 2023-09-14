import { createContext } from "react";

const ContextUser = createContext();

const ContextProviderUser = ({children}) => {
  return (
    <div>ContextProviderUser</div>
  )
}

export default ContextProviderUser