import { useState } from "react"

const Inputt = () => {
    const [vale, setVale] = useState("")
    return (
        <div>
            <input type="text" value={vale} onChange={(event) => setVale(event.target.value)} placeholder="Enter Text" />
            <h2>{vale}</h2>
            <button onClick={()=>setVale("")}>Clear</button>
            
        </div>
    )

}
export default Inputt