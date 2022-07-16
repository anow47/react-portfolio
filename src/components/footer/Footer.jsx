import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="copyright">
                    &copy; Copyright 2022 <a href="#">Hamouda</a> All Rights Reserved
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/hamouda-mohammed-81830370/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://web.facebook.com/anow47" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/@Hamouda_21" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com/anow47" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/anow47" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer