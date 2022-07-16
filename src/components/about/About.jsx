import React from 'react'
import './about.css'
import About_svg from './About_svg'
import '../../index'

const About = () => {
    return (
        <bio id="bio">
            <h2>About</h2>
            <div className="container scroll-element js-scroll fade-in">
                < About_svg />
                <div className="skills_container">
                    <div className="skill-items">
                        <h3>Skills <span>&</span> Tools</h3>
                        <div>
                            <i className="fab fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div>
                            <i className="fab fa-css3-alt"></i>
                            <p>CSS / SCSS</p>
                        </div>
                        <div>
                            <i className="fab fa-js-square"></i>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <i className="fab fa-git-alt"></i>
                            <p>git</p>
                        </div>
                        <div className="github">
                            <a href="https://github.com/anow47" target="_blank">
                                <i className="fab fa-github"></i>
                                <p> github</p>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-react"></i>
                            <p>React js</p>
                        </div>
                        <div>
                            <i class="fa-brands fa-bootstrap"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div>
                            <i className="fab fa-unit-test"></i>
                            <p>JEST UNIT TEST</p>
                        </div>
                        <div>
                            <i className="fas fa-api"></i>
                            <p>JSON & APIs</p>
                        </div>
                        <div>
                            <i className="fab fa-python"></i>
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="about_me" id="about_me">
                        <button onClick={window['showMore']}>More about me...</button>
                        <p id="text">
                            Hello, I'm Hamouda , a front-end developer who's passionate
                            about tech and web development in particular; I use different
                            technologies and tools to accomplish the best results. My main
                            tools are HTML, CSS, JavaScript and React js.
                        </p>
                    </div>
                </div>
            </div>
        </bio >
    )
}

export default About