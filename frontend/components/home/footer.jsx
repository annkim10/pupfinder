import React from "react"
import { render } from "react-dom"
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"

const Footer = () => {
    
    return( 
        <footer className="footer-wrapper">
            <div className="footer-div">
                <div className="about-me">
                    <h1>About Pupfinder</h1>
                    <p>This site is a reimagination of Petfinder.com as a way to create a more dynamic platform for dog adoption.</p>
                </div>
                <div className="my-links">
                    <ul className="links-div">
                        <li className="links">
                            <a classname="links" href="https://www.linkedin.com/in/ann-kim/"> 
                                <span><FaLinkedin /></span>LinkedIn</a>
                           </li>
                        <li className="links">
                            <a className="links" href="https://github.com/annkim10">
                                <span><FaGithub /></span>Github</a>
                        </li>
                        <li className="links">
                            <a className="links" href="https://youtu.be/edX8kZcE4p8?t=1197">
                                <span><FaYoutube /></span>Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer