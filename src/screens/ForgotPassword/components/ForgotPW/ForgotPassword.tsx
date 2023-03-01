import React from "react";
import "./ForgotPassword.css"
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";




export default function ForgotPassword(){
    return(
        <div className="box1">
            <img src={logo} className="fgt_image"/>
            <h1>Forgot password?</h1>
            
            <h4>No worries. We’ll send you reset instructions</h4>
            <div className="field 3">
                        <div className="l1">
                            <label className="label">Email</label>
                        </div>
                            <div className="control has-icons-left">
                                <input className="input" type="email" placeholder="Email" value="" />
                            </div>
                    
                        
                </div>
                <div className="resetButton">
                <Link className="button gradient-button full-width" to="/CheckEmail">Reset Password</Link> 
                </div>
            
        </div>
    )
}
