import { useContext } from "react"
import { SubjectContext } from "./ContextData"


function SubjectComp() {
    const subJect = useContext(SubjectContext)
    return (
        <div style={{ backgroundColor: "red", padding: "10px" }}>
            <h1>Subject is: {subJect}</h1>
        </div>
    )
}

export default SubjectComp