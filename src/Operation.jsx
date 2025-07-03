function sum(a, b) {
    return a + b;
}
const userObj = {
    name: "Hanzala",
    email: "hanzala@gmail.com",
    age: 24
}
function clickMe() {
    alert("This is Click me alert");
}
const apple = (name) => {
    alert(name);
}
function Operators() {

    return (
        <div>
            <h1>
                Operations
            </h1>
            <h2>{sum(2, 3)}</h2>
            <h2>{userObj.name}</h2>
            <button onClick={clickMe}>Click me alert</button>
            <button onClick={() => apple("Apple")}>Apple</button>
            <button onClick={() => apple("Banana")}>Banana</button>
        </div>
    )
}

export default Operators;