import '../styles/signUp.css'
import { useState, useEffect } from 'react';
import {  useNavigate, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import { useTheme } from './ThemeContext';


function SignUp() {
const [dataObject, setdataObject ]=useState({ 
    username:"",
    password:"",
    email:"",
    confirmPassword:"",
})
const [showPassword, setShowPassword] = useState(false);
const [showConfPassword, setShowConPassword] = useState(false);
const [passwordsMatch, setPasswordsMatch] = useState(true);
const [error, setError] = useState(null);
const navigate = useNavigate();

function handleChange(event){
    setdataObject(
        {
            ...dataObject,
            [event.target.name]: event.target.value
        }
    )
}

const toggleVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
const toggleConfirmVisibility = () => {
  setShowConPassword((prevState) => !prevState);
};
function handleSubmit(e) {
    e.preventDefault();
     // Check if passwords match
     if (dataObject.password !== dataObject.confirmPassword) {
      setPasswordsMatch(false);
      return; // Exit the function if passwords don't match
    }
    const formData = {
        username: dataObject.username,
        password: dataObject.password,
        email: dataObject.email
      };

      fetch("https://expense-tracker-web-server.onrender.com/Signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((r) => {
            // Log the response body content
            return r.json().then(responseData => {
                console.log(responseData);
                if (r.ok) {
                    navigate("/");
                } else {
                    throw new Error(`Oops! Invalid details or try again later!"
                    : ${r.status};`);
                }
            });
        })
        .catch((error) => {
          setError(error.message);
        })
    }
const { isDarkMode, toggleTheme } = useTheme();
const modeClass = isDarkMode ? 'dark' : 'light';
useEffect(() => {
    document.body.className = modeClass; // Apply the modeClass to the body element
  }, [modeClass]);
  return (
<>
  <div className='switch'>  
    <ReactSwitch onChange={toggleTheme} checked={isDarkMode==='dark'}/>
  </div>
    <div className="modeClass centered-form text-zinc-950">
        <form className="form" action="#" onSubmit={handleSubmit}>
          <p className="title hover:scale-110 transition-all duration-500">Register</p>
          <p className="message">Signup now and get full access to our app.</p>
          {/* <div className="flex"> */}
            <label>
              <input
                name="username"
                minLength={4}
                maxLength={80}
                required
                placeholder=""
                type="text"
                className="input"
                value={dataObject.username}
                onChange={handleChange}
                />
              <span>Username</span>
            </label>

            {/* <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
              />
              <span>Lastname</span>
            </label> */}
          {/* </div> */}

          <label>
            <input
              name="email"
              type="text"
              required
              placeholder=""
              className="input"
              value={dataObject.email} // Capture email value
              onChange={handleChange} // H
            />
            <span>Email</span>
          </label>

          <label>
            <input
              name="password"
              id="password"   
              minLength={8}       
              required
              placeholder=""
              type={showPassword ? 'text' : 'password'}
              className="input"
              value={dataObject.password}
              onChange={handleChange}
              />
            <span>Password</span>
            <span 
            onClick={toggleVisibility} 
            className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xl ${
                showPassword ? "" : "text-gray-400"
              }`}        >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>

          <label>
            <input
              required
              name="confirmPassword"
              minLength={8}       
              placeholder=""
              type={showConfPassword ? 'text' : 'password'}
              className="input"
              value={dataObject.confirmPassword}
              onChange={handleChange}
            />
            <span>Confirm password</span>
            <span 
            onClick={toggleConfirmVisibility} 
            className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xl ${
              showConfPassword ? "" : "text-gray-400"
              }`}        >
                {showConfPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>

          {!passwordsMatch && (
              <p className="text-red-500">Passwords do not match. Please try again.</p>
            )}
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

          <button className="submit">Submit</button>

          <p className="signin">
            Already have an account? <NavLink to='/'>Sign in</NavLink>
          </p>
        </form>
    </div>
</>
  );
}

export default SignUp;
