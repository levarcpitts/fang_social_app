import "./register.css"
import { useRef } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


export default function Login() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,

      };
      console.log(user)
      try {
      await axios.post("/auth/register", user);
      navigate("/login")

      }catch(err){
        console.log(err)
      }
    }

  }

  return (
    <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Fang</h3>
            <span className="loginDesc">Connect with friends and the world around you on Fang</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" type="text" className="loginInput"  ref={username} required />
                <input placeholder="Email" type="email" className="loginInput"  ref={email} required />
                <input placeholder="Password" type="password" className="loginInput" ref={password} required />  
                <input placeholder="Re-type Password" type="password" className="loginInput" ref={passwordAgain} required />
                <button className="loginButton" type="submit" >Sign Up</button>
                <button className="loginRegister">Login to your Account</button>
            </form>
        </div>
        </div>
    </div>
  )
}
