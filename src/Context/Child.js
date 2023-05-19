import {  useContext } from "react";
import GrandChild from "./GrandChild";
import { AppContext } from "./Parent";
const Child = () => {
    const {userName} = useContext(AppContext)
    return (
        <div>{userName}</div>
    )
}

export default Child;