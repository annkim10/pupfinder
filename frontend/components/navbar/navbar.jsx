import React from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/pupfinder_logo.png"



class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    checkLogin() {
        const {currentUser, logout, openModal} = this.props
        if (typeof currentUser === 'undefined') {
            return (
                <div className="navbar-right">
                        <button className="nav-signup" onClick={() => openModal('signup')}>Sign up</button>
                        <button className="nav-login" onClick={() => openModal('login')}>Log in</button>
                </div>
            )
        } else {
            return (
                <div className="navbar-right">
                    <p className="currentuser-name"> {currentUser.firstName} {currentUser.lastName} </p>
                    <button className="nav-logout" onClick={() => logout()}>Logout</button>
                </div>
            )
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div className="top-navbar">
                    <div className="top-navbar-logo-div" >
                        <img className="top-navbar-logo" src={logo} />
                    </div>
                   {this.checkLogin()}
            </div>
        )
    }
}

export default NavBar