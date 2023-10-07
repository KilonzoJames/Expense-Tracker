import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/Login.css'
import ReactSwitch from 'react-switch';
import { useTheme } from './ThemeContext';

function Login({ updateUsername }) {
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any actions that should occur when newUsername changes here
    console.log(`newUsername has changed to: ${newUsername}`);
  }, [newUsername]);

  const handleLogin = () => {
    updateUsername(newUsername);
  };

  const toggleVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      'username': newUsername,
      'password': password,
    };
    try {
      const response = await fetch("http://127.0.0.1:5555/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
        navigate("/history");
      } else {
        console.log(formData);
        throw new Error(`Invalid username or password! ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      // Clear the username and password fields regardless of success or failure
      handleLogin("");
      setPassword("");
    }
  };

  const { isDarkMode, toggleTheme } = useTheme();
  const modeClass = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.body.className = modeClass; // Apply the modeClass to the body element
  }, [modeClass]);
  return (
<>
  <div className="modeClass content">
    <p className="text-xl font-light italic">Track your expenditures using the 
    <span className='text-blue-500 not-italic font-semibold hover:scale-75 cursor-pointer transition-all duration-500'
    > Expense_Tracker App</span></p>
      <div className="text text-blue-500">Login</div>
        <div className="centered-form">

          <form action="#" onSubmit={handleSubmit}>
            <div className="field">
              <input 
              name="username"
              type="text" 
              id="username"
              required
              className="input" 
              value={newUsername}
              onChange={(e) => {
                setNewUsername(e.target.value);
                setError(null); // Clear the error message when typing
              }}              />
              <span className="span">
                <svg
                  className=""
                  xmlSpace="preserve"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  viewBox="0 0 512 512"
                  y="0"
                  x="0"
                  height="20"
                  width="50"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                    ></path>
                  </g>
                </svg>
              </span>
              <label className="label">Username</label>
            </div>
            <div className="field relative">
              <input 
              name="password"
              id="password"
              placeholder="••••••••"
              autoComplete="off"
              type={showPassword ? 'text' : 'password'}
              required =""
              className="input" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // setError(null); 
                // Clear the error message when typing
              }}              
              />
              <span onClick={toggleVisibility} className="span">
                <svg
                  className=""
                  xmlSpace="preserve"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  viewBox="0 0 512 512"
                  y="0"
                  x="0"
                  height="20"
                  width="50"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"></path>
                  </g>
                </svg>
              </span>
              <span 
              onClick={toggleVisibility} 
              className="toggle-password absolute text-zinc-900 text-xl top-4 right-2 cursor-pointer"
              >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <label className="label">Password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button 
            type="submit"
            className="button"
            >
              Sign in
            </button>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            <div className="sign-up">
              Not a member? <a href="/signup">Signup now</a>
            </div>
          </form>
        </div>
      </div>
      <div className='switch'>  
         <ReactSwitch onChange={toggleTheme} checked={isDarkMode==='dark'}/>
      </div>
  </>
      );
    }
Login.propTypes = {
  username: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,

};
export default Login;