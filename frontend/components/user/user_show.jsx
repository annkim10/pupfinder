import React from "react";
import MeetsIndex from "../meets/meets_index";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"

class UserShow extends React.Component {

    renderProfileImg(currentUser) {
        if (currentUser.photoUrls.length === 0) {
            return <p className="no-profile-img"><FaUserCircle/></p>
        } else {
            return (
                <div>
                      <img className="profile-pic" src={currentUser.photoUrls[0]} />
                      <p className="user-icon"><FaUserCircle/></p>
                </div>
            )
        }
    }

    render() {
        window.scroll(0,0)
        // console.log("inside user", this.props)
        const {currentUser} = this.props
        return (
            <div className="user-show-outer-div">
                <div className="user-show-inner-div">
                    <div className="user-profile">
                        <div className="user-about">
                            <h1>My Pupfinder</h1>
                            {this.renderProfileImg(currentUser)}
                            <p className="user-name">{currentUser.firstName} {currentUser.lastName}</p>
                            <p>{currentUser.email}</p>
                            <div className="user-links">
                                <Link className="user-show-link" to={`/users/${currentUser.id}/meets`}>Meet &amp; Greets</Link>
                                <br/>
                                <Link className="user-show-link" to={`/users/${currentUser.id}/favorites`}>Favorite Pups</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow