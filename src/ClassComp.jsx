import StudentComp from "./StudentComp"

function ClassComp() {
    return (
        <div style={{ backgroundColor: "green", padding: "10px" }}>
            <h1>Class Component</h1>
            <StudentComp />
        </div>
    )
}

export default ClassComp