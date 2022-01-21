import React from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/pupfinder_logo.png"

class Greetings extends React.Component {

    // componentDidMount() {
    //     console.log(this.props)
    // }

    checkLogin() {
        const {currentUser, logout} = this.props
        if (typeof currentUser === 'undefined') {
            return (
                <div className="navbar-right">
                    <Link className="nav-signup" to="/signup">Sign up</Link>
                    <Link className="nav-login" to="/login">Log in</Link>
                </div>
            )
        } else {
            return (
                <div className="navbar-right">
                    <p> {currentUser.firstName} {currentUser.lastName} </p>
                    <button onClick={() => logout()}>Logout</button>
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

export default Greetings