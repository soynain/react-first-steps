import { useState } from 'react'
import './App.css'
import MainBody from './assets/Components/MainBodyComponent'
import NavBar from './assets/Components/NavBarComponent'

function App() {
 // const [count, setCount] = useState(0)
  return (
    <div className="App">
        <NavBar/>
        <MainBody/>
    </div>
  )
}

export default App
