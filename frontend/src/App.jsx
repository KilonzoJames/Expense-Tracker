import './App.css'
import {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import History from './Components/History';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  function handleToggle(){
    setIsDarkMode(prev =>!prev)
  }
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route 
            path='/homepage' 
            element={<Homepage isDarkMode={isDarkMode} handleToggle={handleToggle}/>} 
            />
            <Route path='/history' element={<History/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

