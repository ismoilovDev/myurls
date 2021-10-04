import React, {useState, useEffect} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavSection = () => {

    const [isOpen, setIsOPen] = useState(false);

    const toggle = () => setIsOPen(!isOpen);

    const [scrolled, setScrolled] = useState(false);
    const handlerScroll = () => {
        let value = window.scrollY;

        if(value > 10) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll)
    })

    let x = ['navbar'];
    if(scrolled) {
        x.push('fixed');
    }
    return(
        <>
            <Navbar className={x.join(" ")} light expand='md'>
                <Link to="/" className="navbar-logo"><img src='https://cdn.myurls.co/packs/media/images/icon-6452a1579b7d6d55d5f4dcab86b72695.svg' alt="logo" /> my<span>urls</span>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav navbar>
                        <NavItem>
                            <Link to="/how-it-work">How It Works <span></span></Link>
                            
                        </NavItem>
                        <NavItem>
                            <Link to="/features">Features  <span></span></Link>
                        </NavItem>
                        <NavItem>
                            <div className="nav-btn login">
                                <Link to="/log-in">Log In</Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-btn signup">
                                <Link to="/sign-up">Sign Up</Link>
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default NavSection;