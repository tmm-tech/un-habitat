import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import logo from '../assets/logo.png'
function LoginPage() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className='body_login'>
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
    <div className="form-container sign-up-container">
      <form action="">
        <h1>Create Account</h1>
        <span>use your company email for registration</span>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign In</h1>
        <span>use your account</span>
        <input type="email" name="email" placeholder="Company Email" />
        <input type="password" name="password" placeholder="Password" />
        <Link to="#">Forgot Your PLinkssword</Link>
        <button>Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
        <img className="company-logo" src={logo} alt="Company Logo" />
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" onClick={handleSignInClick}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
        <img className="company-logo" src={logo} alt="Company Logo" />
          <h1>Hello, Friend!</h1>
          <p>Enter your details and start the journey with us</p>
          <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default LoginPage;
