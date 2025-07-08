import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import First from './First'
import UserLogin, { Profile, Setting, UserKey } from './UserComponent'
import ToDo from './ToDo'
import Operators from './Operation'
import Counter from './Counter'
import Toggle from './Toggle'
import Elseif from './Elseif'
import User from './User'
import Propuser from './Props'
import Wrapper from './Wrapper'
import Inputt from './Inputt'
import Form from './Form'
import Maps from './Map'
import ReuseMaps from './ReuseMaps'
import Clock from './Clock'
import DropdownClock from './DropdownClock'


function App() {
  const [display, setDisplay] = useState(false)
  const [cars, setCars] = useState("Car1");
  const changeCars = () => {
    setCars("Car2")
  }
  // let userName = "Hanzala"
  // let userAge = 26;
  // let userEmail = "hanzala@test.com"
  // ====== Pass Data Using Object
  let userObj = {
    name: "Hanzala",
    age: 25,
    email: "hanzala@gmail.com"
  }


  return (
    <>
      <h1>Hello React App</h1>
      <Header />
      <First />
      <UserLogin />
      <Profile />
      <Setting />
      <h2>This is User Key: {UserKey}</h2>
      <ToDo />
      <Operators />
      <h2>{cars}</h2>
      <button onClick={changeCars}>Cange Car Name</button>
      <h2><Counter /></h2>
      <button onClick={() => setDisplay(!display)}>Hide and Show</button>
      {/* {
        display ? <h2>Hanzala</h2> : null
      } */}
      {
        display ? <Toggle /> : null
      }
      <h2><Elseif /></h2>
      <hr />
      {/* <User name="Hanzala" age={23} email="hanzala@test.com" /> */}
      {/* <User name={userName} age={userAge} email={userEmail} /> */}
      <User userData={userObj} />
      <hr />
      <Propuser name="Hanzala" />
      <Propuser />
      <Wrapper />
      <Inputt />
      <Form />
      <Maps />
      <ReuseMaps />
      <DropdownClock />
      {/* <Clock /> */}
    </>
  )
}

export default App
