import { useState, createContext } from "react"
import Child from "./Child"
import GrandChild from "./GrandChild"

 export const AppContext = createContext(null)
const Parent = () => {
    const [userName, setUserName] = useState("preeti")
  
    return (<AppContext.Provider value={{ userName, setUserName }}>
        <div>
      {userName}
        < Child />
            <GrandChild />
            </div>
    </AppContext.Provider>)
}

export default Parent;