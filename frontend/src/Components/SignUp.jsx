import '../styles/signUp.css'
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function SignUp() {
const [dataObject, setdataObject ]=useState({ 
    username:"",
    password:"",
})
const [showPassword, setShowPassword] = useState(false);
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
function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        username: dataObject.username,
        password: dataObject.password,
      };

    fetch("http://127.0.0.1:5555/Signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((r) => {
        if (r.ok) {
            navigate("/");
        } else {
            console.log(dataObject);
            throw new Error(`Invalid username or password: ${r.status};`);
        }
        })
    }
  return (
<div className="centered-form">
    <form className="form" action="#" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      {/* <div className="flex"> */}
        <label>
          <input
            name="username"
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
          required
          placeholder=""
          type="email"
          className="input"
        />
        <span>Email</span>
      </label>

      <label>
        <input
          name="password"
          id="password"          
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
          name="password"
          id="password"
          placeholder=""
          type={showPassword ? 'text' : 'password'}
          className="input"
        />
        <span>Confirm password</span>
        <span 
        onClick={toggleVisibility} 
        className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xl ${
            showPassword ? "" : "text-gray-400"
          }`}        >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </label>

      <button className="submit">Submit</button>

      <p className="signin">
        Already have an account? <a href="/">Sign in</a>
      </p>
    </form>
</div>
  );
}

export default SignUp;
