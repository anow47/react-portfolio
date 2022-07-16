import React from 'react'
import './landing.css'
import Steps from '../../assets/work-steps.png'
import Resume from '../../assets/resume/Hamouda-Mohammed.pdf'

const Landing = () => {
    return (
        <landing>
            <div class="left-box">
                <div class="text">
                    <h3>WELCOME, MY NAME IS:</h3>
                    <h1>Hamouda Mohammed</h1>
                    <p> I'm a Front-end Developer</p>
                    <a
                        href={Resume}
                        download="Hamouda-Mohammed"
                        class="btn"
                    >Download CV</a>
                    <a href="#work" class="btn">My Work</a>
                </div>
            </div>
            <div class="right-box">
                <img src={Steps} alt="animation" />
            </div>
        </landing>
    )
}

export default Landing
