import React from 'react';
import '../Styles/components.css';
import '../Styles/SignUp.css';

function SignUp() {
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
                        <h1>Sign Up</h1>
                    </div>
                    <div className="account">
                        <form>
                            <div className="email for-input">
                                <label for="email">Email</label>
                                <input id="email" name="email" placeholder="enter your email" />
                            </div>
                            <div className="password for-input">
                                <label for="password">Password</label>
                                <input id="password" name="password" placeholder="enter something secretive" />
                            </div>
                            <div className="username for-input">
                                <label for="username">Username</label>
                                <div className="field">
                                    <span>myurls.co/</span>
                                    <input id="username" name="username" placeholder="kluejessic" />
                                </div>
                            </div>
                            <div className="policy">
                                <p>By clicking, you agree to our Privacy Policy</p>
                            </div>                           
                        </form>
                    </div>
                    <div className="signup-btn">
                        <button className="button">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="to-login">
                <a  href="/log-in">
                    Already have an account?
                </a>
            </div>
        </div>
    )
}

export default SignUp
