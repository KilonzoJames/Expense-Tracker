import './App.css'
import {useState, useEffect} from 'react'
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
  useEffect(() => {
    fetch("https://expense-tracker-web-server.onrender.com/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUsername(user));
      }
    });
  }, []);
  function handleLogout() {
    setUsername('');
  }

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route 
            exact path="/" 
            element={<Login username={username} updateUsername={updateUsername}/> } />
            <Route 
            path='/signup' 
            element={<SignUp/>} />
            <Route 
            path='/homepage' 
            element={<Homepage username={username} onLogout={handleLogout}/>} />
            <Route 
            path='/history' 
            element={<History username={username}/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default App

