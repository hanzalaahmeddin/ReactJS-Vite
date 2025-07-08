import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form>
                <br />
                <br />
                <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
                <br />
                <br />
                <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter Name" />
                <br />
                <br />
                <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Name" />
                <br />
                <br />
                <button>Submit</button>
            </form>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>

        </div>
    )
}
export default Form;