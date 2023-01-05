import React from "react";
import './SignUpCard.css'

function LoginCard() {
    return (
        <>
            <div className="card login-card">
                <div className="main-form">
                    <p className="title is-4 mb-2">Create Account</p>
                    <p>Enter your name, email and password to create account.</p>


                    <div className="field mt-6">
                        <label className="label">Name</label>
                        <div className="control has-icons-left">
                            <input className="input" type="email" placeholder="Name" value="" />
                        </div>
                    </div>

                    <div className="field">
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
                        <button className="button is-outline">Facebook</button>
                        <button className="button is-outline mx-4">Linked In</button>
                        <button className="button is-outline">Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCard