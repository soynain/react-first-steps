import { useState } from 'react'
import './App.css'
import MainBody from './assets/Components/MainBodyComponent'
import NavBar from './assets/Components/NavBarComponent'

function App() {
 // const [count, setCount] = useState(0)
  return (
    <div className="d-flex flex-column justify-content-center App">
        <NavBar/>
        <MainBody/>
    </div>
  )
}

export default App
