import { useContext } from "react";
import {context} from "./Parent"
const GrandChild = () => {
    const {setUserName} = useContext(context)
    return (
        <div>
            <button onClick={()=>setUserName("perrti Baliga")}>ChangeName</button>
        </div>
        )
}

export default GrandChild;