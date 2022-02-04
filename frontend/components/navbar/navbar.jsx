import React from "react";
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"



class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    checkLogin() {
        const {currentUser, logout, openModal} = this.props
        if (!currentUser) {
            return (
                <div className="navbar-right">
                        <button className="nav-signup" onClick={() => openModal('signup')}>Sign up</button>
                        <button className="nav-login" onClick={() => openModal('login')}>Log in</button>
                </div>
            )
        } else {
            return (
                <div className="navbar-right">
                    <div className="currentuser-name">
                        <Link to={`/users/${currentUser.id}`} className="username"> {currentUser.firstName} {currentUser.lastName} </Link>
                    </div>
                    <div className="fav-icon-div">
                        <Link to={`/users/${currentUser.id}/favorites`} className="fav-icon"><FaHeart size={20}/> </Link>
                    </div>
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
                        <Link to="/">
                            <img className="top-navbar-logo" src={window.logoURL} />
                        </Link>
                    </div>
                   {this.checkLogin()}
            </div>
        )
    }
}

export default NavBar