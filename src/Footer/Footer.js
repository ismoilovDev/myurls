import React, {useState, useMemo} from 'react';
import './Footer.css';
function Footer() {
    let [count, setCount] = useState(0);

    function inc() {
        if(count < 3643) {
            setCount(++count);
            setTimeout(() => {
                inc()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc()
    }, [])

    return (
        <div className="footer">
            <div className="footer-figure">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 240">
                    <path d="M0,75.17455s325,113.78615,529,65.9368C707.0644,99.34534,729.31647-36.37849,975,9.25981c166,30.83624,225,132.91486,447,62.73581,137.75449-43.5472,235.98724,53.21482,326,79.74892,303,89.31878,407-257.1431,652-54.52327V240H0Z">
                    </path>
                </svg>
            </div>
            <div className="footer-content">
                <div className="footer-discr">
                    <h2>
                        Join the myurls community today
                    </h2>
                    <p>
                        Join the thousands of users who use myurls to help their followers discover all of their content.
                    </p>
                    <div className="footer-btn">
                        <a href="/sign-up" >Use myurls for Free</a>
                        <p>
                            <span>{count}</span>
                            <span> people have signed up this week!</span>
                        </p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="/how-it-work">How It Work</a>
                            </li>
                            <li>
                                <a href="/features">Features</a>
                            </li>
                            <li>
                                <a href="/">FAQ</a>
                            </li>
                            <li>
                                <a href="/">Terms of Service</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                        <p>
                            Copyright © 2021 myurls. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
