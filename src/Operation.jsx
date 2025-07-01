function sum(a, b) {
    return a + b;
}
const userObj = {
    name: "Hanzala",
    email: "hanzala@gmail.com",
    age: 24
}
function Operators() {
    return (
        <div>
            <h1>
                Operations
            </h1>
            <h2>{sum(2, 3)}</h2>
            <h2>{userObj.name}</h2>
        </div>
    )
}

export default Operators;