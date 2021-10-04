import React from 'react';
import '../Styles/components.css';
import '../Styles/SignUp.css';

function LogIn() {
    return (
        <div className="sign-up">
            <div className="logo">
                <a href="/">
                    <img src='https://cdn.myurls.co/packs/media/images/icon-6452a1579b7d6d55d5f4dcab86b72695.svg' alt="logo" /> my<span>urls</span>
                </a>
            </div>
            <div className="form">
                <div className="form-control">
                    <div className="whead">
                        <h1>Sign In</h1>
                    </div>
                    <div className="account">
                        <form>
                            <div className="email for-input">
                                <label for="email">Email</label>
                                <input id="email" name="email" placeholder="enter your email" />
                            </div>
                            <div className="password for-input">
                                <label for="password">Password</label>
                                <input id="password" name="password" placeholder="enter your password" />
                            </div>                         
                        </form>
                    </div>
                    <div className="signup-btn">
                        <button className="button">Sign In</button>
                    </div>
                </div>
            </div>
            <div className="to-login">
                <a  href="/sign-up">
                    Need an account?
                </a>
            </div>
        </div>
    )
}

export default LogIn
