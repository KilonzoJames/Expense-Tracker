import './App.css'
import {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import History from './Components/History';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  function handleToggle(){
    setIsDarkMode(prev =>!prev)
  }
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route 
            path='/homepage' 
            element={<Homepage isDarkMode={isDarkMode} handleToggle={handleToggle}/>} 
            />
            <Route path='/history' element={<History isDarkMode={isDarkMode} handleToggle={handleToggle}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

