import { createContext,useState } from "react"
import { Provider } from "react-redux"
import GrandChild from "./GrandChild"

export const context = createContext("")
const Parent = () => {
  
  const [ userName, setUserName] = useState("preeti")
  return (<context.Provider value={{ userName, setUserName }}>
    <child />
    <GrandChild/>
    {userName}
  </context.Provider>)
}

export default Parent