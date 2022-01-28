import React from "react";
import MeetsIndex from "../meets/meets_index";
import { Link } from "react-router-dom";

class UserShow extends React.Component {

    render() {
        console.log("inside user", this.props)
        const {currentUser} = this.props
        return (
            <div className="user-show-outer-div">
                <div className="user-show-inner-div">
                    <div className="user-profile">
                        <div className="user-about">
                            <h1>My Pupfinder</h1>
                            <img className="profile-pic" src={currentUser.photoUrls[0]} />
                            <p className="user-name">{currentUser.firstName} {currentUser.lastName}</p>
                            <p>{currentUser.email}</p>
                            <div className="user-links">
                                <Link className="user-show-meet-link" to={`/users/${currentUser.id}/meets`}>Meet &amp; Greets</Link>
                                <br/>
                                <h1>Liked Pups</h1>
                            </div>
                        </div>
                    </div>
                    <div className="user-info">
                            <h1>Adopter profile</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow