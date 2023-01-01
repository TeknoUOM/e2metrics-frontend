import React from "react";
import './Hero.css'
import Image from './../../../../images/hero/main.png'

function Hero() {
    return (
        <>
            <div className="container">
                <div className="columns">
                    <div className="column main-content mr-6">
                        <p className="title is-1">Engineering Efficiency Metrics on Github</p>
                        <p className="">Screenful Dashboards for GitHub helps you to stay on track with your projects. This add-on brings you visual dashboards and automated reports that you can share with your team. </p>
                        <button className="button gradient-button mt-6">Get Started</button>
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