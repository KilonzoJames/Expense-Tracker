import './App.css'
import {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import History from './Components/History';

function App() {
  const [username, setUsername] = useState("");
  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <BrowserRouter>
        <Routes>
            <Route 
            exact path="/" 
            element={<Login username={username} updateUsername={updateUsername}/> } />
            <Route 
            path='/signup' 
            element={<SignUp/>} />
            <Route 
            path='/homepage' 
            element={<Homepage username={username} />} />
            <Route 
            path='/history' 
            element={<History username={username}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

