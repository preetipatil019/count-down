import { useState } from "react";
import Timer from ".";

const TimerWrapper = ({ duration, onExpire, beforeRestart }) => {
    const [hasExpire, setExpire] = useState(false)
    const handleRestart = () => {
        setExpire(false)
    }
    const onExpireHelper = () => {
        onExpire && onExpire();
        setExpire(true)
    }
    return (
        !hasExpire ? <Timer onExpire={onExpireHelper} duration={20*1000} /> :
             <button onClick={handleRestart}>Restart</button>
    
    )
    
}


export default TimerWrapper;