import React from "react";
import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav class="navbar is-fixed-top">
                <div className="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start">

                        </div>

                        <div class="navbar-end">
                            <a class="navbar-item ml-4" href="">
                                About
                            </a>
                            <a class="navbar-item ml-4" href="">
                                Features
                            </a>
                            <a class="navbar-item ml-4" href="">
                                Pricing
                            </a>
                            <a class="navbar-item ml-4" href="">
                                Contact us
                            </a>
                            <a class="navbar-item ml-4" href="/login">
                                <button class="button gradient-button">
                                    <span>Log in</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar