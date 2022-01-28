import React from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/pupfinder_logo.png"
import { FaHeart } from "react-icons/fa"
import UserShowContainer from "../user/user_show_container"



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
                        <p> 
                            {currentUser.firstName} {currentUser.lastName}  
                        </p>
                    </div>
                    <div className="fav-icon-div">
                        <Link to={`/users/${currentUser.id}`} className="fav-icon"><FaHeart size={20}/> </Link>
                        {/* <button className="fav-button"> <FaHeart size={20}/> </button> */}
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
                            <img className="top-navbar-logo" src={logo} />
                        </Link>
                    </div>
                   {this.checkLogin()}
            </div>
        )
    }
}

export default NavBar