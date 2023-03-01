
import React from "react";
import "./CheckEmail.css"
import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";

export default function CheckEmail(){
    return(
        <div className="box1">
            <img src={logo} className="fgt_image"/>
            <h1>Check your Email</h1>
            
            <h4>We sent a password reset link to <br/> ABC@gmail.com</h4>
           
             <div className="emailButton">
                    <Link className="button gradient-button full-width" to="/NewPassword">Reset Password</Link>
                </div>

    
    <br/>
           <h4>Didn't receive the email? Click to resend</h4>
        

            
        </div>
    )
}
