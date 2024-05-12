import { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: 'white', 
        },
      },
    },
  },
});


export default function Login() {
const email = useRef();
const password = useRef();
const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch )
  }

  console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Fang</h3>
            <span className="loginDesc">Connect with friends and the world around you on Fang</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" className="loginInput" ref={email} required  />
                <input placeholder="Password" type="password" className="loginInput" ref={password} required minLength="6" />
                <ThemeProvider theme={theme}><button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size="20px" color="primary" /> : "Login"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegister">{isFetching ? <CircularProgress size="20px" color="primary" /> : "Create New Account"}</button></ThemeProvider>
            </form>
        </div>
        </div>
    </div>
  )
}
