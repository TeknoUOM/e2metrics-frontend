import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./NewPassword.css"


export default function NewPassword(){
    return(
        <div className="box1">
            <img src={logo} className="fgt_image"/>
            <h1>Set new password</h1>
            
            <h4 className="t1">Your new password must be different to previously used passwords.</h4>
            <div className="field 3">
                            <label className="label1">Password</label>
                            <div className="control1 has-icons-left">
                                <input className="input" type="Password" placeholder="Password" value="" />
                            </div>

                            <label className="label1">Confirm Password</label>
                            <div className="control1">
                                <input className="input" type="Password" placeholder="Confirm Password" value="" />
                            </div>
                    
                        
                </div>
                <div className="resetButton">
                <button type="button" className="button gradient-button full-width">Reset Password</button>
                </div>
            
        </div>
    )
}