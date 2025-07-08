import { useState } from "react"
import Clock from "./Clock";

const DropdownClock = () => {
    const [color, setColor] = useState('red');
    return (
        <div>
            <select onChange={(event) => setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"green"}>Green</option>
                <option value={"blue"}>Blue</option>
                <option value={"orange"}>Orange</option>
            </select>
            <Clock color={color} />
        </div>
    )
}
export default DropdownClock