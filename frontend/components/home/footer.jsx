import React from "react"
import { render } from "react-dom"
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"

const Footer = () => {
    
    return( 
        <footer className="footer-wrapper">
            {/* <div className="purple-bkgd">
                <p>&nbsp;</p>
            </div> */}
            <div className="footer-div">
                <div className="about-me">
                    <p>This site was designed by Ann Kim.</p>
                </div>
                <div className="my-links">
                    <ul>
                        <li><span><FaLinkedin /></span>LinkedIn</li>
                        <li><span><FaGithub /></span>Github</li>
                        <li><span><FaYoutube /></span>Youtube</li>
                    </ul>
                </div>
                <div className="petfinder">
                    <p>The real petfinder</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer