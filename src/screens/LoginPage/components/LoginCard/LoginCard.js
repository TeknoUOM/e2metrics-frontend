import React from "react";
import './LoginCard.css'

function LoginCard() {
    return (
        <>
            <div className="card login-card">
                <div className="main-form">
                    <p className="title is-4 mb-2">Hey, Hello👋</p>
                    <p>Enter your email and password to login.</p>

                    <div class="field mt-6">
                        <label class="label">Email</label>
                        <div class="control has-icons-left">
                            <input class="input" type="email" placeholder="Email input" value="" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" value="" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field has-text-right">
                        <p>Forgot password?</p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button gradient-button full-width">
                                Login
                            </button>
                        </p>
                    </div>
                    <div class="field has-text-centered mt-6">
                        <p>or login with</p>
                    </div>
                    <div class="field has-text-centered mt-3">
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