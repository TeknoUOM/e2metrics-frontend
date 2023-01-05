import React from "react";
import './NavBar.css'
import logo from './../../images/logo.png'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">

                        </div>

                        <div className="navbar-end">
                            <a className="navbar-item ml-4" href="">
                                About
                            </a>
                            <a className="navbar-item ml-4" href="">
                                Features
                            </a>
                            <a className="navbar-item ml-4" href="">
                                Pricing
                            </a>
                            <a className="navbar-item ml-4" href="">
                                Contact us
                            </a>
                            <a className="navbar-item ml-4" href="/login">
                                <Link className="button gradient-button" style={{color:"black"}} to="/login">Log in</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar