import { useEffect, useState } from "react"

const Clock = ({ color }) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div>
            <h1>Digital Clock in React Js</h1>
            <h3 style={{ color: color, width: "130px", backgroundColor: "#000", borderRadius: "8px", padding: "10px" }}>{time}</h3>
        </div>
    )
}
export default Clock