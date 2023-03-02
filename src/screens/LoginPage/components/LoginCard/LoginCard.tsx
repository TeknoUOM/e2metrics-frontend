import React from "react";
import './LoginCard.css';

function LoginCard() {
    return (
        <>
            <div className="card login-card">
                <div className="main-form">
                    <p className="title is-4 mb-2">Login</p>
                    <p>Enter your email and password to login.</p>

                    <div className="field mt-6">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                            <input className="input" type="email" placeholder="Email" value="" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" value="" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="remember-me">
                            <p>Remember me 
                        </p>
                        <input style={{background:"#3CE794"}} type="checkbox"/>
                        </div>
                        
                        <p>Forgot password?</p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button gradient-button full-width">
                                Login
                            </button>
                        </p>
                    </div>
                    <div className="field has-text-centered mt-6">
                        <p>or Login with</p>
                    </div>
                    <div className="field has-text-centered mt-3">
                        <button className="button is-outline">
                            Github</button>
                        <button className="button is-outline mx-4">Google</button>
                        <button className="button is-outline">Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCard