import { useContext } from "react";
import {AppContext} from "./Parent"
const GrandChild = () => {
    const {setUserName} = useContext(AppContext);
    return (<>
        <button onClick={()=>setUserName("preeti Baliga")}>Change Name</button>
    </>)
}

export default GrandChild;