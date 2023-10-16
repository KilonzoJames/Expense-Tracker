import './App.css'
import {useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import History from './Components/History';

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };
  
  useEffect(() => {
    fetch("https://expense-tracker-web-server.onrender.com/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
        <Routes basename ="/">  
            <Route 
            exact path="/" 
            element={<Login username={username} updateUsername={updateUsername} onLogin={handleLogin}/> } />
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
  )
}

export default App

