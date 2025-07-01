import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import First from './First'
import UserLogin, { Profile, Setting, UserKey } from './UserComponent'
import ToDo from './ToDo'
import Operators from './Operation'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
