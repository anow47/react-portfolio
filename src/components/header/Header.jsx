import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header id="index.html">
            <div class="container">
                <div class="logo"><a href="index.html">Hamouda</a></div>
                <i className="fas fa-bars toggle-menu" onClick={window['toggleMenu']}></i>
                <nav>
                    <ul id="ul">
                        <li><a href="#index.html" class="btn">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#bio">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="fas fa-lightbulb" onclick="lightMode()"></i>
                </nav>
                <i className="fas fa-moon"></i>
                <i className="fas fa-star" id="star"></i>
                <i className="fas fa-star"></i>
            </div>
        </header>
    )
}

export default Header
