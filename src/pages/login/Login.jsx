import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Fang</h3>
            <span className="loginDesc">Connect with friends and the world around you on Fang</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" type="email" className="loginInput" />
                <input placeholder="Password" type="password" className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegister">Create a New Account</button>
            </div>
        </div>
        </div>
    </div>
  )
}
