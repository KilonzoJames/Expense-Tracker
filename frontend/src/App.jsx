import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import History from './Components/History';

function App() {
  return (
    <>
      {/* <nav>
        <ul className="flex flex-row">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
