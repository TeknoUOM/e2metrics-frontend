import React from "react";
import './SignUpCard.css';


function LoginCard() {
    return (
        <>
            <div className="card login-card is-half">
                <div className="main-form">
                    <p className="title is-4 mb-2" style={{color:"#0F1C5F"}}>Create Account</p>
                    <p>Enter your name, email and password to create account.</p>
                    <div className="field mt-6">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="Name"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="field has-text-right">
                        <p>Forgot password?</p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button gradient-button full-width">
                                Sign Up
                            </button>
                        </p>
                    </div>
                    <div className="field has-text-centered mt-6">
                        <p>or SignUp with</p>
                    </div>
                    <div className="field has-text-centered mt-3">
                        <button className="button is-danger">Github</button>
                        <button className="button is-outline mx-4">Google</button>
                        <button className="button is-outline">Facebook</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCard