import { useState, useEffect } from "react";


//values in millisecond
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24* HOUR

const Timer = ({duration,onExpire}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time-1000)
        },1000)
   
  
    //break Condition
    if (time <= 0) {
        onExpire && onExpire();
        clearTimeout(timerId)
    }
    //Clean Up
    return () => {
        clearTimeout(timerId)
        }
    }, [time, onExpire])
    
    const getFormatedTime = (time) => {
        const day = Math.floor(time / DAY);
        const hour = Math.floor((time % DAY) / HOUR)
        const minute = Math.floor((time % HOUR) / MINUTE)
         const second = Math.floor((time % MINUTE) / SECOND)
        return `${day}:${hour}:${minute}:${second}`;
    }
    return getFormatedTime(time)
}

export default Timer;