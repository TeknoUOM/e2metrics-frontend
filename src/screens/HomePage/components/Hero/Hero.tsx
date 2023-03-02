import React from "react";
import './Hero.css'
import Image from './../../../../images/hero/main.png'
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="container">
                <div className="columns">
                    <div className="column main-content mr-6">
                        <p className="title is-1">Engineering Efficiency Metrics on Github</p>
                        <p className="">Screenful Dashboards for GitHub helps you to stay on track with your projects. This add-on brings you visual dashboards and automated reports that you can share with your team. </p>
                        <a className="button gradient-button mt-6" style={{color:"black"}} href="https://accounts.asgardeo.io/t/tekno/accountrecoveryendpoint/register.do?client_id=2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia&code_challenge=-4YTCkM4mOuJ9uGrSCGM14Ifxd_UiLjaOGwgxiZdGq8&code_challenge_method=S256&commonAuthCallerPath=%2Ft%2Ftekno%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Flocalhost%3A3000&response_mode=query&response_type=code&scope=openid+profile&state=request_5&sessionDataKey=f838b833-edf5-4f8f-b8c6-5af04250c428&relyingParty=2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia&type=oidc&sp=e2mertrics&isSaaSApp=false&authenticators=GoogleOIDCAuthenticator%3AGoogle%3BGithubAuthenticator%3AGitHub%3BFacebookAuthenticator%3AFacebook%3BBasicAuthenticator%3ALOCAL&reCaptcha=true&reCaptchaResend=true&callback=https%3A%2F%2Faccounts.asgardeo.io%3A443%2Ft%2Ftekno%2Fauthenticationendpoint%2Flogin.do%3Fclient_id%3D2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia%26code_challenge%3D-4YTCkM4mOuJ9uGrSCGM14Ifxd_UiLjaOGwgxiZdGq8%26code_challenge_method%3DS256%26commonAuthCallerPath%3D%2Ft%2Ftekno%2Foauth2%2Fauthorize%26forceAuth%3Dfalse%26passiveAuth%3Dfalse%26redirect_uri%3Dhttps%3A%2F%2Flocalhost%3A3000%26response_mode%3Dquery%26response_type%3Dcode%26scope%3Dopenid+profile%26state%3Drequest_5%26sessionDataKey%3Df838b833-edf5-4f8f-b8c6-5af04250c428%26relyingParty%3D2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia%26type%3Doidc%26sp%3De2mertrics%26isSaaSApp%3Dfalse%26authenticators%3DGoogleOIDCAuthenticator%3AGoogle%3BGithubAuthenticator%3AGitHub%3BFacebookAuthenticator%3AFacebook%3BBasicAuthenticator%3ALOCAL%26reCaptcha%3Dtrue%26reCaptchaResend%3Dtrue">Get Started</a>
                    </div>
                    <div className="column ">
                        <img src={Image} className='main-image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero